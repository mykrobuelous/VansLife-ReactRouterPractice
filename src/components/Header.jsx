// eslint-disable-next-line no-unused-vars
import React from "react";
import userIcon from "../assets/images/avatar-icon.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Header() {
	const navigate = useNavigate();
	const activeStyles = {
		fontWeight: "bold",
		textDecoration: "underline",
		color: "#161616",
	};

	const fakeLogOut = () => {
		localStorage.setItem("loggedin", false);
		// navigate("/host");
	};

	return (
		<header>
			<Link className="site-logo" to="/">
				#VanLife
			</Link>
			<nav>
				<NavLink to="host" style={({ isActive }) => (isActive ? activeStyles : null)}>
					Host
				</NavLink>
				<NavLink to="about" style={({ isActive }) => (isActive ? activeStyles : null)}>
					About
				</NavLink>
				<NavLink to="vans" style={({ isActive }) => (isActive ? activeStyles : null)}>
					Vans
				</NavLink>
				<Link to="login" className="login-link">
					<img src={userIcon} className="login-icon" alt="User Icon" />
				</Link>
				<button onClick={fakeLogOut}>X</button>
			</nav>
		</header>
	);
}
