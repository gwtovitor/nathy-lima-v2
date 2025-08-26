import { Menu, X } from 'lucide-react';
import styles from './navBar.module.scss';
import logo from '../../assets/logo1.png';
import { useState, useRef, useEffect } from 'react';

export default function Navbar({ onGo }) {
	const [isHidden, setIsHidden] = useState(false);
	const lastY = useRef(0);
	const ticking = useRef(false);

	useEffect(() => {
		const THRESHOLD = 12;
		const MIN_SHOW_Y = 80;

		const onScroll = () => {
			const y = window.scrollY || 0;

			if (!ticking.current) {
				window.requestAnimationFrame(() => {
					const delta = y - lastY.current;
					const isScrollingDown = delta > THRESHOLD;
					const isScrollingUp = delta < -THRESHOLD;

					if (y < MIN_SHOW_Y) {
						setIsHidden(false);
					} else if (isScrollingDown) {
						setIsHidden(true);
					} else if (isScrollingUp) {
						setIsHidden(false);
					}

					lastY.current = y;
					ticking.current = false;
				});
				ticking.current = true;
			}
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return <Header onGo={onGo} isHidden={isHidden} />;
}
const Logo = () => {
	return <img alt="Logo MC Akilo" className={styles.logo} src={logo} />;
};
const Header = ({ onGo, isHidden }) => {
	return (
		<header className={`${styles.header} ${isHidden ? styles.hidden : ''}`}>
			<Logo />
			<Nav onGo={onGo} />
		</header>
	);
};

const Nav = ({ onGo }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavBar = () => {
		setIsOpen((prev) => !prev);
	};

	const go = (key) => {
		onGo?.(key);
		setIsOpen(false);
	};

	return (
		<nav className={styles.nav}>
			<div className={styles.navLinksWrapper}>
				<NavLinks go={go} />
			</div>
			<div className={styles.menuButton}>
				<button onClick={toggleNavBar}>
					{isOpen ? (
						<X className={styles.menuLogo} />
					) : (
						<Menu className={styles.menuLogo} />
					)}
				</button>
			</div>

			<div className={`${styles.mobileNav} ${isOpen ? styles.open : ''}`}>
				<NavLinks go={go} />
			</div>
		</nav>
	);
};

const NavLinks = ({ go }) => {
	return (
		<>
			<div className={styles.navItem} onClick={() => go('home')}>
				Home
			</div>
			<div className={styles.navItem} onClick={() => go('events')}>
				Agenda
			</div>
			<div className={styles.navItem} onClick={() => go('listenNow')}>
				Ouça
			</div>
			<div className={styles.navItem} onClick={() => go('history')}>
				História
			</div>

			<div className={styles.navItem} onClick={() => go('contact')}>
				Contato
			</div>
		</>
	);
};
