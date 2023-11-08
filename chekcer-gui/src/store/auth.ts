import {Key} from "../core/Key.ts"
import AuthService from "../service/AuthService.ts";
import {makeAutoObservable} from "mobx";

export default class Auth {
    Key = {} as Key
    sessionHash = ''
    isLoading = false
    isAuth = false

    constructor() {
        makeAutoObservable(this);
    }

    setKey(key:Key) {
        this.Key = key
    }

    setSessionHash(hash:string) {
        this.sessionHash = hash
    }

    setLoading(bool:boolean) {
        this.isLoading = bool
    }

    setAuth(bool:boolean) {
        this.isAuth = bool
    }

    async auth(key:string){
        this.setLoading(true)
        try {
            const response = await AuthService.auth(key)
            localStorage.setItem("session", response.headers['x-session-hash'])
            this.setSessionHash(response.headers['x-session-hash'])
            this.setAuth(!response.data.data.is_expired)
        } catch (e:any) {
           console.log(e.response?.data?.error_message)
        } finally {
            this.setLoading(false)
        }

    }
}