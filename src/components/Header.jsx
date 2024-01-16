// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	const activeSyle = {
		fontWeight: "bold",
		textDecoration: "underline",
		color: "#161616",
	};
	return (
		<header>
			<NavLink className="site-logo" to="/">
				#VanLife
			</NavLink>
			<nav>
				<NavLink style={({ isActive }) => (isActive ? activeSyle : null)} to="/Host">
					Host
				</NavLink>
			</nav>
			<nav>
				<NavLink style={({ isActive }) => (isActive ? activeSyle : null)} to="/about">
					About
				</NavLink>
			</nav>
			<nav>
				<NavLink style={({ isActive }) => (isActive ? activeSyle : null)} to="/Vans">
					Vans
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;
