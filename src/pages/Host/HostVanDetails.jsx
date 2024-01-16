// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HostVanDetails = () => {
	const [van, setVan] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		fetch(`/api/host/vans/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setVan(data.vans);
			});
	}, [id]);

	if (!van) {
		return <h1>Loading ...</h1>;
	}

	return (
		<section>
			<div className="host-van-detail-layout-container">
				<div className="host-van-detail">
					<img src={van.imageUrl} />
					<div className="host-van-detail-info-text">
						<i className={`van-type van-type-${van.type}`}>{van.type}</i>
						<h3>{van.name}</h3>
						<h4>${van.price}/day</h4>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HostVanDetails;
