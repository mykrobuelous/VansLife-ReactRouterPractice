import { getVans } from "../api";

export const vansLoader = () => {
	const vans = getVans();
	return vans;
};
