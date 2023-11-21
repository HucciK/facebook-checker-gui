import Sidebar from "./UI/Sidebar/Sidebar.jsx";
import {Outlet} from "react-router-dom";
import "../styles/styles.css"

function Layout() {
    return (
       <div className="container">
           <Sidebar/>
           <div className="page">
                <Outlet/>
           </div>
       </div>
    );
}

export default Layout;
