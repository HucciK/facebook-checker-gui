import {makeAutoObservable} from "mobx";
import AuthService from "../service/AuthService.js";

export default class Store {
    key = {};
    session = '';
    isAuth = false;
    isLoading = true;

    constructor() {
        makeAutoObservable(this);
    }

    setKey(key) {
        this.key = key;
    }

    setSession(hash) {
        this.session = hash;
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setLoading(bool) {
        this.isLoading = bool;
    }

    async login(key) {
        try {
            const resp = await AuthService.login(key)
            this.setAuth(true);
            this.setKey(resp.data.data);
            this.setSession(resp.headers["x-session-hash"]);
            localStorage.setItem("key", key);
        } catch (e) {
            console.log(e.response?.data?.error_message)
            localStorage.removeItem("key")
        }
    }
}