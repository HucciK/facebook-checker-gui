import React, {createContext, useContext} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/styles.css";
import Store from "./store/store.js";
import {BrowserRouter} from "react-router-dom";
import Check from "./store/check.js";

const store = new Store();
const check = new Check();

export const StoreContext = createContext({store, check});


ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <StoreContext.Provider value={{store, check}}>
            <App />
        </StoreContext.Provider>
    </BrowserRouter>
);
