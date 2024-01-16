// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VanDetails = () => {
	const { id: VansId } = useParams();
	const [van, setVan] = useState(null);

	useEffect(() => {
		fetch(`/api/vans/${VansId}`)
			.then((res) => res.json())
			.then((data) => {
				setVan(data.vans);
			});
	}, [VansId]);

	return (
		<div className="van-detail-container">
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