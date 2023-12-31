import React, {createContext, useContext} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/styles.css";
import Store from "./store/store.js";
import {BrowserRouter} from "react-router-dom";
import Check from "./store/check.js";
import {Command} from "@tauri-apps/api/shell";
import Settings from "./store/settings.js";
const cmd = Command.sidecar("./bin/cmd")
const output = cmd.execute()
output.then(r => console.log(r))

const store = new Store();
const check = new Check();
const settings = new Settings();

export const StoreContext = createContext({store, check, settings});

function render() {
    ReactDOM.createRoot(document.getElementById("root")).render(
        <BrowserRouter>
            <StoreContext.Provider value={{store, check, settings}}>
                <App />
            </StoreContext.Provider>
        </BrowserRouter>
    );
}

setTimeout(render, 1000);