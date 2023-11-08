import {Route, Routes, useLocation} from "react-router-dom";
import {observer} from "mobx-react-lite";
import Layout from "./components/Layout/Layout.tsx";
import Auth from "./components/Auth/Auth.tsx";
import "./index.css";
import Home from "./components/Home/Home.tsx";
import Account from "./components/Account/Account.tsx";
import Checker from "./components/Checker/Checker.tsx";
import {AnimatePresence} from "framer-motion";
import RequireKey from "./components/RequireKey/RequireKey.tsx";
import {useContext, useEffect} from "react";
import {StateContext} from "./index.tsx";
import Settings from "./components/Settings/Settings.tsx";

function App() {
  const location = useLocation();
  const {auth} = useContext(StateContext);

    useEffect(() => {
        const key = localStorage.getItem('key')
        if (key) {
            auth.auth(key)
        }
    }, [])

    if (auth.isLoading) {
        return <div>
            Loading
        </div>
    }


  return (
      <AnimatePresence mode={"wait"}>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Layout/>}>
              {/*PUBLIC*/}
              <Route path={"/"} element={<Auth/>}/>

              {/*PRIVATE*/}
              <Route element={<RequireKey/>}>
                  <Route path={"/home"} element={<Home/>}/>
                  <Route path={"/account"} element={<Account/>}/>
                  <Route path={"/checker"} element={<Checker/>}/>
                  <Route path={"/settings"} element={<Settings/>}/>
              </Route>
            </Route>
          </Routes>
      </AnimatePresence>
  );
}

export default observer(App);
