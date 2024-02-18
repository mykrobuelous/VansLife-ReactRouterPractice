import { redirect } from "react-router-dom";

export const requireAuth = async (request) => {
	const pathname = new URL(request.url).pathname;
	const isLoggedIn = localStorage.getItem("loggedin") === "true";

	if (!isLoggedIn) {
		return redirectPage("/login?message=You must login first&" + `redirectto=${pathname}`);
	}
	return null;
};

export const redirectPage = (url) => {
	const response = redirect(url);
	response.body = true;
	return response;
};
