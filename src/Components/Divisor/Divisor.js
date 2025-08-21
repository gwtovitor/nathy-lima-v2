/* eslint-disable jsx-a11y/alt-text */
import styles from './divisor.module.scss'
import logo from '../../assets/logo1.png'
import { useRevealOnScroll } from '../../Hooks/useRevealOnScrool'

export default function Divisor({bodyText}){

    const [showImage1, refImage1] = useRevealOnScroll()
    const [showImage2, refImage2] = useRevealOnScroll()

    return(
        <div className={styles.divisor}>
            <img ref={refImage1} className={`${styles.hiden} ${showImage1 ? styles.show : ""}`} src={logo}/>
            <h1 className={styles.bodyText}>{bodyText}</h1>
            <img ref={refImage2} className={`${styles.hiden}  ${showImage2 ? styles.show2 : ""}`} src={logo}/>
        </div>
    )
}