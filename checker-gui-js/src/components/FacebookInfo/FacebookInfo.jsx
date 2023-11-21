import styles from "./FacebookInfo.module.css"

function FacebookInfo({acc}) {

    return (
        <ul className={styles.facebook_info}>
            <li className={styles.info_ceil}>{acc.account_status}</li>
            <li className={styles.info_ceil}>{acc.currency}</li>
            <li className={styles.info_ceil}>{acc.balance}</li>
            <li className={styles.info_ceil}>{acc.amount_spent}</li>
            <li className={styles.info_ceil}>{acc.spend_cap}</li>
            <li className={styles.info_ceil}>{acc.timezone_name}</li>
        </ul>
    )
}

export default FacebookInfo;