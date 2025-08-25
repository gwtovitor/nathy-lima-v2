import styles from './mainView.module.scss';
import bgVideo from '../../assets/bg_video.mp4';
import poster from '../../assets/video_poster.jpg';
import logo2 from '../../assets/logo2.png';
import openInNewTab from '../../Services/openInNewTab'

export default function MainView() {
	//https://www.youtube.com/watch?v=jpPmC6BB5Jo
	return (
		<div className={styles.mainView}>
			<div className={styles.backDrop}></div>
			<video
				poster={poster}
				className={styles.backgroundVideo}
				src={bgVideo}
				loop
				muted
				autoPlay
			></video>
			<div className={styles.wrapperInfo}>
				<img className={styles.logo} src={logo2} />
				<span>Ouça agora leite derramado</span>
				<div onClick={()=>openInNewTab("https://www.youtube.com/watch?v=jpPmC6BB5Jo")} className={styles.youtubeBtn}>
                    <img src="https://img.icons8.com/ios-filled/50/FFFFFF/youtube-play.png" alt="youtube-play"/>
                    <span>OUÇA NO YOUTUBE!</span>
                </div>
			</div>
		</div>
	);
}
