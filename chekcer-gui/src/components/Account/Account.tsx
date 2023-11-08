import Sidebar from "../Sidebar/Sidebar.tsx";
// @ts-ignore
import styles from "./Account.module.css"
import {motion as m} from "framer-motion";

function Account() {
    return (
        <div className={styles.account}>
            <Sidebar/>
            <m.div className={styles.account_content + " content"}>
                <div className={styles.account_content_header}>ACCOUNT</div>
                ]
            </m.div>
        </div>
    );
}

export default Account;