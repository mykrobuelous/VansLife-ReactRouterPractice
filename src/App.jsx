// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanDetails from "./pages/Vans/VanDetails";
import Layout from "./components/Layout";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./pages/Host/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import Van from "./pages/Host/HostVanDetails";
import HostVans from "./pages/Host/HostVans";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="About" element={<About />} />
					<Route path="Vans" element={<Vans />} />
					<Route path="Vans/:id" element={<VanDetails />} />

					<Route path="Host" element={<HostLayout />}>
						<Route index element={<Dashboard />} />
						<Route path="Income" element={<Income />} />
						<Route path="Reviews" element={<Reviews />} />
						<Route path="Vans" element={<HostVans />} />
						<Route path="Vans/:id" element={<Van />} />
					</Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;
