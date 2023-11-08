// @ts-ignore
import styles from "./Sidebar.module.css";

import {FaGear, FaUser, FaLocationDot, FaDoorOpen, FaHouse, FaListCheck} from "react-icons/fa6"
import {NavLink} from "react-router-dom";
import {useState} from "react";

function Sidebar() {
    const [homeActive, setHomeActive] = useState<boolean>();
    const [accountActive, setAccountActive] = useState<boolean>();
    const [checkActive, setCheckActive] = useState<boolean>();
    const [settingsActive, setSettingsActive] = useState<boolean>();

    function activateHome(bool:boolean): string {
        setHomeActive(bool)
        return ""
    }

    function activateAccount(bool:boolean): string{
        setAccountActive(bool)
        return ""
    }

    function activateCheck(bool:boolean): string{
        setCheckActive(bool)
        return ""
    }

    function activateSettings(bool:boolean): string {
        setSettingsActive(bool)
        return ""
    }

    return (
        <div className={styles.sidebar}>
            <div className={styles.app_control}>
                <NavLink className={({isActive}) => activateHome(isActive)} to={"/home"}><FaHouse className={homeActive ? styles.active : styles.null} id={styles["app_control_home"]}/></NavLink>
                <NavLink className={({ isActive }) => activateAccount(isActive)} to={"/account"}><FaUser className={accountActive ? styles.active : styles.null} id={styles["app_control_user"]}/></NavLink>
                <NavLink className={({ isActive }) => activateCheck(isActive)} to={"/checker"}><FaListCheck className={checkActive ? styles.active : styles.null} id={styles["app_control_checker"]}/></NavLink>
            </div>

            <div className={styles.app_settings}>
                <NavLink className={({isActive}) => activateSettings(isActive)} to={"/settings"}><FaGear className={settingsActive ? styles.active : styles.null} id={styles["app_control_settings"]}/></NavLink>
                <NavLink to={"/home"}><FaLocationDot id={styles["app_control_proxy"]}/></NavLink>
                <NavLink to={"/"}><FaDoorOpen id={styles["app_control_exit"]}/></NavLink>
            </div>
        </div>
    );
}

export default Sidebar;