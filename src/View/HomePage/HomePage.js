import MainView from '../../Components/MainView/MainView'
import Navbar from '../../Components/Navbar/Navbar'
import styles from './homePage.module.scss'
import History from '../../Components/History/History';
import { useRef, useCallback } from 'react';
import Divisor from '../../Components/Divisor/Divisor'


export default function HomePage(){

    const refs = {
		galeria: useRef(null),
		oucaAgora: useRef(null),
		historia: useRef(null),
		contato: useRef(null),
	};

	const scrollTo = useCallback((key) => {
		const el = refs[key]?.current;
		if (!el) return;
		el.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}, []);

    return(
        <div className={styles.homePage}>
            <Navbar onGo={scrollTo}/>
            <MainView/>
            <Divisor bodyText="Nathália Lima"/>
            <section>
                <History/>
            </section>

        </div>
    )
}