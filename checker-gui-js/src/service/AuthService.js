import {$api} from "../http/api.js";
import SHA256 from 'crypto-js/sha256.js';
import hex from 'crypto-js/enc-hex.js'
let salt = import.meta.env.VITE_SOME_KEY

export default class AuthService {
    static getSessionHash(key) {
        salt = ""
        const sessionStart = new Date().getTime()
        const hash = SHA256(`${sessionStart}_${key}_${salt}`).toString(hex)

        return `${sessionStart}_${hash}`
    }

    static async login(key){
        const session = AuthService.getSessionHash(key)
        return $api.post("/auth/login", {
            "key": key,
        }, {
            headers: {
                "X-Session-Hash": session,
            },
        })
    }
}