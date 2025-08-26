import MainView from '../../Components/MainView/MainView';
import Navbar from '../../Components/Navbar/Navbar';
import styles from './homePage.module.scss';
import History from '../../Components/History/History';
import { useRef, useCallback } from 'react';
import Divisor from '../../Components/Divisor/Divisor';
import Events from '../../Components/Events/Events';
import ListenNow from '../../Components/ListenNow/ListenNow';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';

export default function HomePage() {
	const refs = {
		home: useRef(null),
		events: useRef(null),
		listenNow: useRef(null),
		history: useRef(null),
		contact: useRef(null)
	};

	const scrollTo = useCallback((key) => {
		const el = refs[key]?.current;
		if (!el) return;
		el.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}, []);

	return (
		<div className={styles.homePage}>
			<Navbar onGo={scrollTo} />
			<MainView ref={refs.home}/>

			<Divisor bodyText="Agenda" />
			<section ref={refs.events}>
				<Events />
			</section>
			<Divisor bodyText="Ouça !" />

			<section ref={refs.listenNow}>
				<ListenNow />
			</section>
			<Divisor bodyText="Nathy Lima" />
			<section ref={refs.history}>
				<History />
			</section>
			<Divisor bodyText="Contato" />

			<section ref={refs.contact}>
				<Contact />
			</section>
			<Footer />
		</div>
	);
}
