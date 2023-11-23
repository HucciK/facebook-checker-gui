import {useContext, useEffect, useState} from "react";
import {StoreContext} from "../../main.jsx";
import {useNavigate} from "react-router-dom";
import styles from "./Auth.module.css";
import KeyInput from "../../components/UI/input/KeyInput/KeyInput.jsx";
import {FaArrowRightToBracket} from "react-icons/fa6";
import Titlebar from "../../components/UI/Titlebar/Titlebar.jsx";

function Auth() {
    const {store} = useContext(StoreContext);
    const navigate = useNavigate();

    const [key, setKey] = useState('');

    const handleLogin = (key) => {
        store.login(key).then(() => store.isAuth ? navigate("/") : null);
    }

    return (
        <div className={styles.auth}>
            <Titlebar/>
            <div className={styles.auth_content}>
                <div className={styles.auth_handling}>
                    <KeyInput
                        type="text"
                        placeholder="ВВЕДИТЕ ВАШ КЛЮЧ"
                        onChange={(e) => setKey(e.target.value)}
                    />
                    <FaArrowRightToBracket className={styles.auth_login} onClick={() => handleLogin(key)}/>
                </div>
            </div>
        </div>
    )
}

export default Auth;