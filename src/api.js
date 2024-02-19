// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAc0vc2PcRxhAFEz3VSq8lEXFBL7s7c4tk",
	authDomain: "vanlife-bbd2e.firebaseapp.com",
	projectId: "vanlife-bbd2e",
	storageBucket: "vanlife-bbd2e.appspot.com",
	messagingSenderId: "507495434719",
	appId: "1:507495434719:web:fef2812bfd85e1f2c41c6a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

export async function getVans() {
	const querySnapshot = await getDocs(vansCollectionRef);
	const dataArray = querySnapshot.docs.map((doc) => ({
		...doc.data(),
		id: doc.id,
	}));

	return dataArray;
}

export async function getVan(id) {
	const docRef = doc(db, "vans", id);
	const vanSnapshot = await getDoc(docRef);
	return { ...vanSnapshot.data(), id: vanSnapshot.id };
}

export const getHostVans = async () => {
	const q = query(vansCollectionRef, where("hostId", "==", "123"));
	const querySnapshot = await getDocs(q);
	const dataArray = querySnapshot.docs.map((doc) => ({
		...doc.data(),
		id: doc.id,
	}));
	console.log({ dataArray });

	return dataArray;
};
export const getHostVan = async (id) => {
	const q = query(vansCollectionRef, where("id", "==", id));
	const querySnapshot = await getDocs(q);
	const dataArray = querySnapshot.docs.map((doc) => ({
		...doc.data(),
		id: doc.id,
	}));
	console.log({ dataArray });

	return dataArray;
};

// export async function getHostVans(id) {
// 	const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
// 	const res = await fetch(url);
// 	if (!res.ok) {
// 		throw {
// 			message: "Failed to fetch vans",
// 			statusText: res.statusText,
// 			status: res.status,
// 		};
// 	}
// 	const data = await res.json();
// 	return data.vans;
// }

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function loginUser(creds) {
	await sleep(2000);
	const res = await fetch("/api/login", { method: "post", body: JSON.stringify(creds) });
	const data = await res.json();

	if (!res.ok) {
		throw {
			message: data.message,
			statusText: res.statusText,
			status: res.status,
		};
	}

	return data;
}
