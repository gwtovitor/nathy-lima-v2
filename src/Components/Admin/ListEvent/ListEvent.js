import styles from "./listEvent.module.scss"
import { useState } from "react";
import Event from "../Event/Event";
import ModalEdit from "../ModalEdit/ModalEdit"

export default function ListEvent({ events, getAllEvents }) {
	const [selectedEvent, setSelectedEvent] = useState(null);
	if (!events || events.length < 1) {
		return <div className={styles.noEvent}>Sem eventos cadastrados</div>;
	}
	return (
		<div className={styles.listEvent}>
			{events.map((event) => (
				<Event
					getAllEvents={getAllEvents}
					key={event.id}
					event={event}
					setSelectedEvent={setSelectedEvent}
				/>
			))}
			{selectedEvent !== null && (
				<ModalEdit
					eventName={selectedEvent.eventName}
					eventAdress={selectedEvent.adress}
					eventDate={selectedEvent.date}
					eventId={selectedEvent.id}
					getAllEvents={getAllEvents}
					setSelectedEvent={setSelectedEvent}
				/>
			)}
		</div>
	);
}

