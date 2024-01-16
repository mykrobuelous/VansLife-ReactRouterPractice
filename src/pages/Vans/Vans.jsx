// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Vans() {
	const [vans, setVans] = useState([]);

	useEffect(() => {
		fetch("/api/vans")
			.then((res) => res.json())
			.then((data) => {
				setVans(data.vans);
			});
	}, []);

	const vanElements = vans.map((van) => (
		<Link
			to={`/Vans/${van.id}`}
			key={van.id}
			aria-label={`View Details For the ${van.name} Priced at the ${van.price} per day`}
		>
			<div className="van-tile">
				<img src={van.imageUrl} alt={`Image of ${van.name}`} />
				<div className="van-info">
					<h3>{van.name}</h3>
					<p>
						${van.price}
						<span>/day</span>
					</p>
				</div>
				<i className={`van-type ${van.type} selected`}>{van.type}</i>
			</div>
		</Link>
	));

	return (
		<div className="van-list-container">
			<h1>Explore our van options</h1>
			<div className="van-list">{vanElements}</div>
		</div>
	);
}
