import {useContext, useEffect} from "react";
import {StoreContext} from "../main.jsx";
import {Navigate, Outlet, useLocation, useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

function RequireKey() {
    const {store} = useContext(StoreContext);
    const location = useLocation();

    if (!store.isAuth) {
        return <Navigate to="/auth" state={{location}} />
    }

    return <Outlet/>
}

export default observer(RequireKey);