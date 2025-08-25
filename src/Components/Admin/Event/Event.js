import styles from "./event.module.scss"
import getApiClient from "../../../Services/api";
import { Trash, RefreshCcw } from 'lucide-react';

export default function Event({ event, getAllEvents, setSelectedEvent }) {
	async function deleteEvent() {
		const api = getApiClient();
		await api.delete(`/delete-event/${event.id}`);
		await getAllEvents();
	}

	function getDateByIsoDate(isoDate) {
		const date = new Date(isoDate);
		const day = String(date.getUTCDate()).padStart(2, '0');
		const month = String(date.getUTCMonth() + 1).padStart(2, '0');
		const year = date.getUTCFullYear();
		return `${day}/${month}/${year}`;
	}

	return (
		<div className={styles.event}>
			<div className={styles.wrapperData}>
				<h2>{event.eventName}</h2>
				<span>{event.adress}</span>
				<span>{getDateByIsoDate(event.date)}</span>
			</div>
			<div className={styles.wrapperButtons}>
				<button
					onClick={() => setSelectedEvent(event)}
					className={`${styles.btn} ${styles.update}`}
				>
					<RefreshCcw /> Editar
				</button>
				<button
					onClick={deleteEvent}
					className={`${styles.btn} ${styles.delete}`}
				>
					<Trash /> Excluir
				</button>
			</div>
		</div>
	);
}

