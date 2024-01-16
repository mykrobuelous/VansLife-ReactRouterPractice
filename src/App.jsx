// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";

function App() {
	return (
		<>
			<header>
				<Link className="site-logo" to="/">
					#VanLife
				</Link>
				<nav>
					<Link to="/about">This is to test the changes</Link>
				</nav>
			</header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
			</Routes>
		</>
	);
}

export default App;
