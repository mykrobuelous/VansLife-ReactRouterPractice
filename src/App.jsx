// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
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
import HostVans from "./pages/Host/HostVans";
import HostVanDetails from "./pages/Host/HostVanDetails";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import NotFound from "./pages/NotFound";
import { vansLoader } from "./loaders/vansLoader";

const routes = createRoutesFromElements(
	<Route path="/" element={<Layout />}>
		<Route index element={<Home />} />
		<Route path="About" element={<About />} />
		<Route path="Vans" element={<Vans />} loader={vansLoader} errorElement={<h1>error</h1>} />
		<Route path="Vans/:id" element={<VanDetails />} />

		<Route path="Host" element={<HostLayout />}>
			<Route index element={<Dashboard />} />
			<Route path="Income" element={<Income />} />
			<Route path="Reviews" element={<Reviews />} />
			<Route path="Vans" element={<HostVans />} />
			<Route path="Vans/:id" element={<HostVanDetails />}>
				<Route index element={<HostVanInfo />} />
				<Route path="pricing" element={<HostVanPricing />} />
				<Route path="photos" element={<HostVanPhotos />} />
			</Route>
		</Route>

		<Route path="*" element={<NotFound />} />
	</Route>
);

const router = createBrowserRouter(routes);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
