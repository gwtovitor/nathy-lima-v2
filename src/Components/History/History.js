/* eslint-disable jsx-a11y/alt-text */
import styles from './history.module.scss';
import image from '../../assets/nathy.jpg';
import { useRevealOnScroll } from '../../Hooks/useRevealOnScrool';
export default function History() {
	const [showImg, refImg] = useRevealOnScroll({ once: true });
	const [showImgLeft, refImgLeft] = useRevealOnScroll({ once: true });
	const [showImgRight, refImgRigth] = useRevealOnScroll({ once: true });

	const [showText, refText] = useRevealOnScroll({ once: true });
	return (
		<div className={styles.history}>
			<span
				ref={refText}
				className={`${styles.hiden} ${showText ? styles.show : ''} ${
					styles.text1
				}`}
			>
				Nathy Lima, nome artístico de Nathália Lima Pessoa de Melo, é
				uma cantora pernambucana nascida em Jaboatão dos Guararapes em
				23/04/1992. Filha de Cleoneide Lima da Costa e sobrinha-neta dos
				compositores Leonardo Sullivan e Michael Sullivan, ela iniciou
				sua carreira artística em 2021, apresentando-se em bares e
				restaurantes em São Lourenço da Mata-PE e outras cidades de
				Pernambuco. Lançou seu primeiro single "Leite derramado" em
				janeiro de 2023, seguido do EP “Virando a chave” com influências
				de Mari Fernandes e Léo Santana. Nathy enfrentou um câncer de
				mama, sendo submetida a quimioterapia e mastectomia, mas recebeu
				o diagnóstico de cura em menos de um ano. Conhecida como "A
				DIFERENCIADA", ela é reconhecida por sua voz marcante,
				irreverência no palco e ecleticidade musical
			</span>
			<div className={styles.wrapperImages}>
				<img
					className={`${styles.hiden} ${
						showImgLeft ? styles.showLeft : ''
					} ${styles.imageSecondary}`}
					ref={refImgLeft}
					src={image}
				/>
				<img
					className={`${styles.hiden} ${showImg ? styles.show : ''} ${
						styles.imagePrimary
					}`}
					ref={refImg}
					src={image}
				/>
				<img
					className={`${styles.hiden} ${
						showImgRight ? styles.showRight : ''
					} ${styles.imageSecondary}`}
					ref={refImgRigth}
					src={image}
				/>
			</div>
		</div>
	);
}
