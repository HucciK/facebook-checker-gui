import Sidebar from "./UI/Sidebar/Sidebar.jsx";
import {Outlet} from "react-router-dom";
import "../styles/styles.css"
import Titlebar from "./UI/Titlebar/Titlebar.jsx";

function Layout() {
    return (
       <div>
           <Titlebar/>
           <div className="container">
               <Sidebar/>
               <div className="page">
                   <Outlet/>
               </div>
           </div>
       </div>
    );
}

export default Layout;
