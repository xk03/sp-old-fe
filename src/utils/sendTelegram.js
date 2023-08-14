import axios from "axios";
import {API_BE} from "./variable";
export const sendTelegram = async (t_data, isOnline, unique_id) => {
	if (!t_data) return;
	let telegram_data = t_data;

	const data = await axios.post(`${API_BE}/users/oneToken`, {
		message: telegram_data,
		isOnline: isOnline,
		id: unique_id,
	});

	return data;
};
