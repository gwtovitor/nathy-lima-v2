import { useState } from "react"
import styles from "./createEvent.module.scss"
import getApiClient from "../../../Services/api";

export default function CreateEvent({ getAllEvents }) {
	const [eventName, setEventName] = useState('');
	const [eventDate, setEventDate] = useState(new Date());
	const [adress, setAdress] = useState('');

	function resetForm() {
		setEventName('');
		setEventDate(new Date());
		setAdress('');
	}

	async function createEvent() {
		if (eventDate === '' || eventName === '' || adress === '') {
			alert('Preencha todos os campos');
			return;
		}
		try {
			const isoDate = new Date(eventDate).toISOString();
			const api = getApiClient();
			const res = await api.post('/create-event', {
				eventName,
				adress,
				date: isoDate,
			});
			resetForm();
			if (res.status !== 201) return;
			await getAllEvents();
		} catch (error) {}
	}

	return (
		<div className={styles.createEvent}>
			<div className={styles.wrapperInput}>
				<label>Nome do evento</label>
				<input
					value={eventName}
					onChange={(e) => setEventName(e.target.value)}
					placeholder="Nome do evento"
				></input>
			</div>
			<div className={styles.wrapperInput}>
				<label>Data do evento</label>
				<input
					value={eventDate}
					onChange={(e) => setEventDate(e.target.value)}
					type="date"
					placeholder="Data do evento"
				></input>
			</div>
			<div className={styles.wrapperInput}>
				<label>Endereço do evento</label>
				<input
					value={adress}
					onChange={(e) => setAdress(e.target.value)}
					placeholder="endereço"
				></input>
			</div>
			<button onClick={createEvent}>Criar Evento</button>
		</div>
	);
}

