// @ts-ignore
import styles from "./FacebookResult.module.css"
import {FacebookAccount} from "../../../core/FacebookAccount.ts";

export interface FacebookResultProps {
    acc:FacebookAccount
}

function FacebookResult(props:FacebookResultProps) {
    return (
        <div className={styles.fb_account}>
            <div className={styles.fb_account_content}>
                <span>{props.acc.stats.account_status}</span>
                <span>{props.acc.stats.currency}</span>
                <span>{props.acc.stats.balance}</span>
                <span>{props.acc.stats.amount_spent}</span>
                <span>{props.acc.stats.spend_cap}</span>
                <span>{props.acc.stats.timezone_name}</span>
            </div>
        </div>
    )
}

export default FacebookResult;