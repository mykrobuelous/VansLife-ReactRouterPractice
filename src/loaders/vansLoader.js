import { getVans } from "../api";

export const vansLoader = async () => {
	const vans = await getVans();
	return vans;
};
