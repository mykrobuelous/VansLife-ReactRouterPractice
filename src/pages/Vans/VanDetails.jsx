// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const VanDetails = () => {
	const { id: VansId } = useParams();
	const [van, setVan] = useState(null);
	const { state } = useLocation();

	useEffect(() => {
		fetch(`/api/vans/${VansId}`)
			.then((res) => res.json())
			.then((data) => {
				setVan(data.vans);
			});
	}, [VansId]);

	return (
		<div className="van-detail-container">
			<Link to={`..${state?.search || ""}`} relative="path" className="back-button">
				&larr; <span>{`Back to ${state?.type || "all"} vans`}</span>
			</Link>
			{van ? (
				<div className="van-detail">
					<img src={van.imageUrl} />
					<i className={`van-type ${van.type} selected`}>{van.type}</i>
					<h2>{van.name}</h2>
					<p className="van-price">
						<span>${van.price}</span>/day
					</p>
					<p>{van.description}</p>
					<button className="link-button">Rent this van</button>
				</div>
			) : (
				<h2>Loading...</h2>
			)}
		</div>
	);
};

export default VanDetails;
