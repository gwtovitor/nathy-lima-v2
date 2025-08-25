import { useState } from "react";
import getApiClient from "../../../Services/api";
import styles from "./modalEdit.module.scss"

export default function ModalEdit({
	eventName,
	eventDate,
	eventAdress,
	eventId,
	getAllEvents,
	setSelectedEvent,
}) {
	const [name, setName] = useState(eventName);
	const [date, setDate] = useState(eventDate);
	const [adress, setAdress] = useState(eventAdress);

	async function updateEvent() {
		try {
			const api = getApiClient();
			const res = await api.put('/update-event', {
				id: eventId,
				eventName: name,
				date,
				adress,
			});
			console.log(res.data);
			await getAllEvents();
			setSelectedEvent(null);
		} catch (error) {}
	}
	return (
		<div className={styles.modal}>
			<div
				onClick={() => setSelectedEvent(null)}
				className={styles.backDrop}
			></div>
			<div className={styles.editEvent}>
				<div className={styles.wrapperInput}>
					<label>Nome do evento</label>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Nome do evento"
					></input>
				</div>
				<div className={styles.wrapperInput}>
					<label>Data do evento</label>
					<input
						type="date"
						value={
							date
								? new Date(date).toISOString().slice(0, 10)
								: ''
						}
						onChange={(e) => setDate(e.target.value)}
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
				<button onClick={updateEvent}>Atualizar Evento</button>
			</div>
		</div>
	);
}
