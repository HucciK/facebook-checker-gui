import {useContext, useEffect, useState} from "react";
import Loader from "./components/UI/Loader.jsx";
import {StoreContext} from "./main.jsx";
import {observer} from "mobx-react-lite";
import {Route, Routes} from "react-router-dom";
import Auth from "./pages/Auth/Auth.jsx";
import Home from "./pages/Home/Home.jsx";
import RequireKey from "./components/RequireKey.jsx";
import Layout from "./components/Layout.jsx";
import Account from "./pages/Account/Account.jsx";
import Checker from "./pages/Checker/Checker.jsx";
import Settings from "./pages/Settings/Settings.jsx";


function App() {
  const {store} = useContext(StoreContext);


  useEffect(() => {
      async function checkAuth(){
          if (localStorage.getItem("key")) {
              await store.login(localStorage.getItem("key"))
          }
          store.setLoading(false);
      }
      checkAuth();
  }, [])

  if (store.isLoading) {
      return <Loader/>
  }

  return (
    <Routes>
        <Route path={"/"} element={<Layout/>}>
            <Route element={<RequireKey/>}>
                <Route index element={<Home/>}/>
                <Route path={"account"} element={<Account/>} />
                <Route path={"checker"} element={<Checker/>} />
                <Route path={"settings"} element={<Settings/>} />
            </Route>
        </Route>
        <Route path={"auth"} element={<Auth/>}/>
    </Routes>
  );
}

export default observer(App);
