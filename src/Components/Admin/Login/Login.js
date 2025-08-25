import styles from "./login.module.scss"
import { useState } from "react";
import bgImage from '../../../assets/nathy_bg.jpg';


export default function Login({ setIsLogged }) {
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');

	function login() {
		if (user === '' || password === '') {
			alert('Preencha os dados');
			return;
		}
		if (
			user === process.env.REACT_APP_USER &&
			password === process.env.REACT_APP_PASSWORD
		) {
			setIsLogged(true);
		} else {
			alert('Usuario ou senha inválidos ');
		}
	}

	return (
		<div className={styles.login}>
			<img src={bgImage} />
			<div className={styles.wrapper}>
				<div className={styles.wrapperInput}>
					<label>User</label>
					<input
						onChange={(e) => setUser(e.target.value)}
						placeholder="Usuario"
					></input>
				</div>
				<div className={styles.wrapperInput}>
					<label>Senha</label>
					<input
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						placeholder="Senha"
					></input>
				</div>
				<button onClick={login}>Login</button>
			</div>
		</div>
	);
}

