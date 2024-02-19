import { defer } from "react-router";
import { getVans } from "../api";

export const vansLoader = async () => {
	const vans = getVans();
	return defer({ vans });
};
