// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanDetails, { vanDetailsLoader } from "./pages/Vans/VanDetails";
import Layout from "./components/Layout";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./pages/Host/HostLayout";
import Dashboard, { dashboardLoader } from "./pages/Host/Dashboard";
import HostVans, { hostVansLoader } from "./pages/Host/HostVans";
import HostVanDetails, { hostVanDetailsLoader } from "./pages/Host/HostVanDetails";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import NotFound from "./pages/NotFound";
import { vansLoader } from "./loaders/vansLoader";
import Error from "./components/Error";
import Login, { loginAction, loginLoader } from "./pages/Login";
import { requireAuth } from "./utils";

const routes = createRoutesFromElements(
	<Route path="/" element={<Layout />}>
		<Route path="Login" element={<Login />} loader={loginLoader} action={loginAction} />
		<Route index element={<Home />} />
		<Route path="About" element={<About />} />
		<Route path="Vans" element={<Vans />} loader={vansLoader} errorElement={<Error />} />
		<Route path="Vans/:id" element={<VanDetails />} loader={vanDetailsLoader} errorElement={<Error />} />

		<Route path="Host" element={<HostLayout />}>
			<Route index element={<Dashboard />} loader={dashboardLoader} />
			<Route
				path="Income"
				element={<Income />}
				loader={async ({ request }) => {
					return await requireAuth(request);
				}}
			/>
			<Route
				path="Reviews"
				element={<Reviews />}
				loader={async ({ request }) => {
					return await requireAuth(request);
				}}
			/>
			<Route path="Vans" element={<HostVans />} loader={hostVansLoader} errorElement={<Error />} />
			<Route path="Vans/:id" element={<HostVanDetails />} loader={hostVanDetailsLoader} errorElement={<Error />}>
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
