import Sidebar from "../Sidebar/Sidebar.tsx";
// @ts-ignore
import styles from './Checker.module.css';
import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {StateContext} from "../../index.tsx";
import FacebookResult from "./FacebookResult/FacebookResult.tsx";
// @ts-ignore
import logo from "./m177-logo.png"
import {FaTrashCan} from "react-icons/fa6";


function Checker() {
    const {check,settings, auth} = useContext(StateContext);
    const lampStyles = [styles.checker_status_lamp]
    if (check.isConnected) {
        lampStyles.push(styles.lamp_active)
    }

    return (
        <div className={styles.checker}>
            <Sidebar/>
            <div className={styles.checker_content + " content"}>
                <img className={styles.checker_background_logo} src={logo} alt="LOGO"/>
                <div className={styles.checker_content_header}>CHECK</div>
                <div className={styles.check_result}>
                    <div className={styles.checker_result_header}>
                        <span>СТАТУС</span>
                        <span>ВАЛЮТА</span>
                        <span>БАЛАНС</span>
                        <span className={styles.amount_spent}>СПЕНД</span>
                        <span className={styles.spend_cap}>ЛИМИТ</span>
                        <span>ГЕО</span>
                    </div>
                    <div className={styles.check_result_preview}>
                        {check.result.map((r) => <FacebookResult key={r.id} acc={r}/>)}
                    </div>
                    <div className={styles.check_result_stats}>
                        <div className={styles.checker_status}>STATUS</div>
                        <div className={lampStyles.join(' ')}></div>
                    </div>
                </div>
                <div className={styles.checker_handling}>
                    <button disabled={check.isConnected} className={styles.checker_start_button} onClick={() => check.start(settings.checker, auth.sessionHash)}>START</button>
                    <button disabled={check.isConnected} className={styles.checker_remove_result_wrap} onClick={() => check.removeResult()}><FaTrashCan className={styles.checker_remove_result}/></button>
                </div>
            </div>
        </div>
    )
}

export default observer(Checker);