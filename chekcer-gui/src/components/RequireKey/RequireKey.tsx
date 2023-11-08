import {useContext} from "react";
import {StateContext} from "../../index.tsx";
import {Outlet} from "react-router-dom";

function RequireKey() {
    const {auth} = useContext(StateContext);

    if (!auth.isAuth) {
        console.log("not auth")
    }

    return (
        <Outlet/>
    )
}

export default RequireKey;