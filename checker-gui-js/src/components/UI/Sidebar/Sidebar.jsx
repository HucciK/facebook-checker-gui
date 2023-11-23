import styles from "./Sidebar.module.css";
import {FaGear, FaHouse, FaListCheck, FaLocationDot} from "react-icons/fa6";
import {FaDoorOpen, FaUser} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import { exit } from '@tauri-apps/api/process';

function Sidebar() {

    // <FaUser/>
    // <FaListCheck/>
    async function closeApp() {
        await exit(1);
    }

    return (
        <div className={styles.sidebar}>
            <div className={styles.selector}>
                <NavLink children={({isActive}) => <FaHouse className={isActive ? styles.active : styles.disabled}/>} to={"/"}/>
                <NavLink children={({isActive}) => <FaUser className={isActive ? styles.active : styles.disabled}/>} to={"/account"}/>
                <NavLink children={({isActive}) => <FaListCheck className={isActive ? styles.active : styles.disabled}/>} to={"/checker"}/>
            </div>

            <div className={styles.settings}>
                <NavLink children={({isActive}) => <FaGear className={isActive ? styles.active : styles.disabled}/>} to={"/settings"}/>
                <FaLocationDot style={{color:"grey"}}/>
                <FaDoorOpen className={styles.exit} onClick={closeApp}/>
            </div>
        </div>
    )
}

export default Sidebar;