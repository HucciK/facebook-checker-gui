import styles from "./Sidebar.module.css";
import {FaGear, FaHouse, FaListCheck, FaLocationDot} from "react-icons/fa6";
import {FaDoorOpen, FaUser} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import {useState} from "react";

function Sidebar() {
    const [homeActive, setHomeActive] = useState();
    const [accountActive, setAccountActive] = useState();
    const [checkActive, setCheckActive] = useState();
    const [settingsActive, setSettingsActive] = useState();


    return (
        <div className={styles.sidebar}>
            <div className={styles.selector}>
                <NavLink className={({isActive}) => setHomeActive(isActive)} to={"/"}><FaHouse className={homeActive ? styles.active : styles.disabled}/></NavLink>
                <NavLink className={({isActive}) => setAccountActive(isActive)} to={"/account"}><FaUser className={accountActive ? styles.active : styles.disabled}/></NavLink>
                <NavLink className={({isActive}) => setCheckActive(isActive)} to={"/checker"}>< FaListCheck className={checkActive ? styles.active : styles.disabled}/></NavLink>
            </div>

            <div className={styles.settings}>
                <FaGear/>
                <FaLocationDot/>
                <FaDoorOpen/>
            </div>
        </div>
    )
}

export default Sidebar;