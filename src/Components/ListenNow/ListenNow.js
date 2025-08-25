/* eslint-disable jsx-a11y/iframe-has-title */
import styles from './listenNow.module.scss';
import bgImage from "../../assets/nathy_bg.jpg"

export default function ListenNow() {
	return (
		<div className={styles.listenNow}>
			<img src={bgImage} alt="Background"/>
			<iframe
				src="https://open.spotify.com/embed/artist/7cwFYoDDYIC3v5LuXKsxIL?utm_source=generator"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			></iframe>
		</div>
	);
}
