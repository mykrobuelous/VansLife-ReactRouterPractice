// eslint-disable-next-line no-unused-vars
import React, { Suspense } from "react";
import { Link, useLoaderData, useSearchParams, Await } from "react-router-dom";

export default function Vans() {
	const dataPromise = useLoaderData();

	const [searchParams, setSearchParams] = useSearchParams();

	const typeFilter = searchParams.get("type");

	const updateParams = (type, value) => {
		const newParams = new URLSearchParams(searchParams);

		if (value) newParams.set(type, value);
		else newParams.delete("type");

		setSearchParams(newParams);
	};

	const renderVanElements = (vans) => {
		const vanElements = vans
			.filter((van) => (searchParams.get("type") ? van.type === searchParams.get("type") : van))
			.map((van) => (
				<Link
					to={van.id}
					key={van.id}
					state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
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
			<>
				<div className="van-list-filter-buttons">
					<button
						onClick={() => {
							updateParams("type", "simple");
						}}
						className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
					>
						Simple
					</button>
					<button
						onClick={() => {
							updateParams("type", "rugged");
						}}
						className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}
					>
						Rugged
					</button>
					<button
						onClick={() => {
							updateParams("type", "luxury");
						}}
						className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}
					>
						Luxury
					</button>
					{typeFilter && (
						<button
							onClick={() => {
								updateParams("type", null);
							}}
							className="van-type clear-filters"
						>
							Clear
						</button>
					)}
				</div>
				<div className="van-list">{vanElements}</div>
			</>
		);
	};

	return (
		<div className="van-list-container">
			<h1>Explore our van options</h1>
			<Suspense fallback={<h2>Loading...</h2>}>
				<Await resolve={dataPromise.vans}>{renderVanElements}</Await>
			</Suspense>
		</div>
	);
}
