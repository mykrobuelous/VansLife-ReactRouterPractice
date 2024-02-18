// eslint-disable-next-line no-unused-vars
import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
	const error = useRouteError();
	return (
		<>
			<h1>This is an Error: {error.message}</h1>
			<pre>
				{error.status} - {error.statusText}
			</pre>
		</>
	);
};

export default Error;
