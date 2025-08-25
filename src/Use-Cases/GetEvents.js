import getApiClient from '../Services/api';

export default async function GetEvents() {
	try {
		const api = getApiClient();
		const response = await api.get('/get-events');
		if (response.status !== 200) throw new Error('Error on get event');
        return response.data
	} catch (err) {
		console.log(err);
	}
}
