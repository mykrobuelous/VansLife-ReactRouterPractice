// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Authentication = () => {
	const isLoggedIn = true;

	if (!isLoggedIn) return <Navigate to="/login" />;

	return <Outlet />;
};

export default Authentication;
