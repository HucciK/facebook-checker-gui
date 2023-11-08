// @ts-ignore
import styles from "./Auth.module.css";
import {useContext, useState} from "react";
import {FaArrowRightToBracket} from "react-icons/fa6";
import {motion as m} from "framer-motion";
import {StateContext} from "../../index.tsx";
import {useNavigate} from "react-router-dom";

function Auth() {
    const {auth} = useContext(StateContext);
    const [key, setKey] = useState<string>('')
    const navigate = useNavigate();

    const tryAuth = () => {
        auth.auth(key).then(() => auth.isAuth ? navigate("/home") : navigate("/"))
    }

    return (
        <m.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} exit={{opacity:0}} className={styles.auth}>
            <div className={styles.auth_content}>
                <div className={styles.auth_text}>ДОБРО ПОЖАЛОВАТЬ!</div>
                <div className={styles.auth_handling}>
                    <input
                        id={styles["auth_dashboard_key_input"]}
                        type="text"
                        onChange={(e) => setKey(e.target.value)}
                        value={key}
                        placeholder="ВВЕДИТЕ ВАШ КЛЮЧ"
                    />
                    <FaArrowRightToBracket id={styles["auth_dashboard_login"]} onClick={tryAuth}/>
                </div>
            </div>
        </m.div>
    );
}

export default Auth;