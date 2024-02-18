// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export const hostVanDetailsLoader = async ({ params, request }) => {
	const auth = await requireAuth(request);
	return auth || getHostVans(params.id);
};

const HostVanDetails = () => {
	const van = useLoaderData();

	const activeStyles = {
		fontWeight: "bold",
		textDecoration: "underline",
		color: "#161616",
	};

	return (
		<section>
			<Link to=".." relative="path" className="back-button">
				&larr; <span>Back to all vans</span>
			</Link>

			<div className="host-van-detail-layout-container">
				<div className="host-van-detail">
					<img src={van.imageUrl} />
					<div className="host-van-detail-info-text">
						<i className={`van-type van-type-${van.type}`}>{van.type}</i>
						<h3>{van.name}</h3>
						<h4>${van.price}/day</h4>
					</div>
				</div>
				<nav className="host-van-detail-nav">
					<NavLink to="." style={({ isActive }) => (isActive ? activeStyles : null)} end>
						Details
					</NavLink>

					<NavLink to="pricing" style={({ isActive }) => (isActive ? activeStyles : null)}>
						Pricing
					</NavLink>

					<NavLink to="photos" style={({ isActive }) => (isActive ? activeStyles : null)}>
						Photos
					</NavLink>
				</nav>

				<Outlet context={van} />
			</div>
		</section>
	);
};

export default HostVanDetails;
