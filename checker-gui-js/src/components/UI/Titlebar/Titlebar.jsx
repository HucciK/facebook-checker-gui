import styles from "./Titlebar.module.css"
import {FaXmark} from "react-icons/fa6";
import {exit} from "@tauri-apps/api/process";

function Titlebar() {
    async function close() {
        await exit(1);
    }

    return (
        <div data-tauri-drag-region className={styles.titlebar}>
            <FaXmark className={styles.titlebar_close} onClick={close}/>
        </div>
    );
}

export default Titlebar;