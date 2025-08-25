import { useEffect, useState } from 'react';
import styles from './events.module.scss';
import GetEvents from '../../Use-Cases/GetEvents';
import { useRevealOnScroll } from '../../Hooks/useRevealOnScrool';

export default function Events() {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		let isMounted = true;

		(async () => {
			const data = await GetEvents();
			if (isMounted) setEvents(data || []);
		})();
		return () => {
			isMounted = false;
		};
	}, []);

	if (events.length === 0)
		return (
			<div className={styles.events}>
				<div className={`${styles.event}`}>
					<div className={styles.date}>
						<div className={styles.day}></div>
						<div className={styles.month}></div>
					</div>
					<div className={styles.eventInfo}>
						<h3 className={styles.eventName}>
							Sem eventos cadastrados
						</h3>
						<span className={styles.adress}></span>
					</div>
				</div>
			</div>
		);

	return (
		<div className={styles.events}>
			{events.map((event, index) => (
				<Event key={event.id} event={event} index={index} />
			))}
		</div>
	);
}
function Event({ event, index }) {
	const [isVisible, ref] = useRevealOnScroll({ once: true });

	function getDateStr(dateIso, isDay) {
		const mounths = [
			'JAN',
			'FEV',
			'MAR',
			'ABR',
			'MAI',
			'JUN',
			'JUL',
			'AGO',
			'SET',
			'OUT',
			'NOV',
			'DEZ',
		];
		const date = new Date(dateIso);

		if (isDay) {
			return date.getUTCDate();
		} else {
			return mounths[date.getMonth()];
		}
	}
	const fadeClass = index % 2 === 0 ? styles.showLeft : styles.showRight;

	return (
		<div
			ref={ref}
			className={`${styles.event} ${styles.hiden} ${
				isVisible ? fadeClass : ''
			}`}
		>
			<div className={styles.date}>
				<div className={styles.day}>{getDateStr(event.date, true)}</div>
				<div className={styles.month}>{getDateStr(event.date)}</div>
			</div>
			<div className={styles.eventInfo}>
				<h3 className={styles.eventName}>{event.eventName}</h3>
				<span className={styles.adress}>{event.adress}</span>
			</div>
		</div>
	);
}
