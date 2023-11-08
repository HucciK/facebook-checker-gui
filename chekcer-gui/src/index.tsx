import React, {createContext} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Check from "./store/check.ts";
import Auth from "./store/auth.ts";
import Settings from "./store/settings.ts";
import {Command} from "@tauri-apps/api/shell";
const cmd = Command.sidecar("./cmd")
const output = cmd.execute()
output.then(r => console.log(r))

const check = new Check()
const auth = new Auth()
const settings = new Settings

export interface State {
    auth: Auth,
    check: Check,
    settings: Settings,
}

export const StateContext = createContext<State>({check, auth, settings})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <StateContext.Provider value={{check, auth, settings}}>
                <Routes>
                    <Route path="/*" element={<App/>}/>
                </Routes>
            </StateContext.Provider>
        </BrowserRouter>
    </React.StrictMode>
);