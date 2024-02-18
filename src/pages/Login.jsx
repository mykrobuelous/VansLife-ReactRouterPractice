// eslint-disable-next-line no-unused-vars
import React from "react";
import { Form, useActionData, useLoaderData, useNavigation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { loginUser } from "../api";
import { redirectPage } from "../utils";

export const loginLoader = async ({ request }) => {
	return new URL(request.url).searchParams.get("message");
};

export const loginAction = async ({ request }) => {
	const formData = await request.formData();

	const pathname = new URL(request.url).searchParams.get("redirectto") || "/host";

	try {
		await loginUser({ email: formData.get("email"), password: formData.get("password") });
		localStorage.setItem("loggedin", true);

		return redirectPage(pathname);
	} catch (err) {
		return err.message;
	}
};

export default function Login() {
	const message = useLoaderData();
	const error = useActionData();
	const navigation = useNavigation();

	return (
		<div className="login-container">
			<h1>Sign in to your account</h1>
			{message && <h3 className="red">{message}</h3>}
			{error && <h3 className="red">{error}</h3>}
			<Form className="login-form" method="post" replace>
				<input name="email" type="email" placeholder="Email address" />
				<input name="password" type="password" placeholder="Password" />
				{
					<button disabled={navigation.state === "submitting"}>
						{navigation.state === "submitting" ? "Logging in.." : "Login in"}
					</button>
				}
			</Form>
		</div>
	);
}
