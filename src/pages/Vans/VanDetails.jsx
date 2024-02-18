// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { getVans } from "../../api";

export const vanDetailsLoader = async ({ params }) => {
	return getVans(params.id);
};

const VanDetails = () => {
	const van = useLoaderData();
	const { state } = useLocation();

	return (
		<div className="van-detail-container">
			<Link to={`..${state?.search || ""}`} relative="path" className="back-button">
				&larr; <span>{`Back to ${state?.type || "all"} vans`}</span>
			</Link>

			<div className="van-detail">
				<img src={van.imageUrl} />
				``
				<i className={`van-type ${van.type} selected`}>{van.type}</i>
				<h2>{van.name}</h2>
				<p className="van-price">
					<span>${van.price}</span>/day
				</p>
				<p>{van.description}</p>
				<button className="link-button">Rent this van</button>
			</div>
		</div>
	);
};

export default VanDetails;
