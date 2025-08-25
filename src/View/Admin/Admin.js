import styles from './admin.module.scss';
import { useEffect, useState } from 'react';
import getApiClient from '../../Services/api.js';
import ListEvent from '../../Components/Admin/ListEvent/ListEvent.js';
import CreateEvent from '../../Components/Admin/CreateEvent/CreateEvent.js';
import Login from '../../Components/Admin/Login/Login.js';

export default function Admin() {
	const [isLogged, setIsLogged] = useState(false);
	const [events, setEvents] = useState([]);

	async function getAllEvents() {
		try {
			const res = await getApiClient().get('/get-admin-events');
			if (res.status === 200) {
				setEvents(res.data);
				console.log(res.data);
			}
		} catch (error) {
			console.error('Erro ao buscar eventos:', error);
		}
	}
	useEffect(() => {
		getAllEvents();
	}, []);

	if (!isLogged) {
		return <Login setIsLogged={setIsLogged}></Login>;
	}

	return (
		<div className={styles.admin}>
			<CreateEvent getAllEvents={getAllEvents} />
			<ListEvent getAllEvents={getAllEvents} events={events} />
		</div>
	);
}

