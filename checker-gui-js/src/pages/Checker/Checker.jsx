import styles from "./Checker.module.css"
import logo from  "../../assets/m177-logo.png"
import {FaTrashCan} from "react-icons/fa6";
import FacebookList from "../../components/FacebookList.jsx";
import {useContext, useEffect, useState} from "react";
import {StoreContext} from "../../main.jsx";
import {observer} from "mobx-react-lite";
import Statistics from "../../components/UI/Statistics/Statistics.jsx";


function Checker() {
    const {store,check, settings} = useContext(StoreContext);
    const indicator = [styles.status_indicator]
    if (check.isConnected) {
        indicator.push(styles.active);
    }
    const total = check.accounts.length

    return (
        <div className={styles.checker}>
            <div className={styles.checker_header}>CHECKER</div>
            <div className={styles.checker_internal}>
                <ul className={styles.checker_columns}>
                    <li className={styles.column_name}>СТАТУС</li>
                    <li className={styles.column_name}>ВАЛЮТА</li>
                    <li className={styles.column_name}>БАЛАНС</li>
                    <li className={styles.column_name}>СПЕНД</li>
                    <li className={styles.column_name}>ЛИМИТ</li>
                    <li className={styles.column_name}>ГЕО</li>
                </ul>
                <div className={styles.checker_result}>
                    <FacebookList accs={check.accounts}/>

                </div>
                <div className={styles.checker_background}>
                    <img className={styles.background_logo} src={logo} alt="logo"/>
                </div>
                <div className={styles.checker_status_bar}>
                    <div className={styles.status_bar_content}>
                        {/*<Statistics total={total}/>*/}
                        <span className={styles.status}>STATUS</span>
                        <div className={indicator.join(' ')}></div>
                    </div>
                </div>
                <div className={styles.checker_handling}>
                    <button disabled={check.isConnected} className={styles.start_button} onClick={() => check.start(store.session, settings.paths)}>START</button>
                    <FaTrashCan className={styles.remove_result_button} onClick={check.isConnected ? null : check.removeAccounts}/>
                </div>
            </div>
        </div>
    )
}

export default observer(Checker);