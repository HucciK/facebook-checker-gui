import { AxiosResponse } from "axios";
import {AuthResponse} from "../http/response.ts";
import {$api} from "../http/api.ts";
import { SHA256, enc } from 'crypto-js';
// @ts-ignore
let salt = import.meta.env.VITE_SOME_KEY

export default class AuthService {
   static getSessionHash(key: string): string {
      salt = ""
      const sessionStart = new Date().getTime()
      const hash = SHA256(`${sessionStart}_${key}_${salt}`).toString(enc.Hex)

      return `${sessionStart}_${hash}`
   }

    static async auth(key: string): Promise<AxiosResponse<AuthResponse>> {
       const session = AuthService.getSessionHash(key)
       return $api.post<AuthResponse>("/auth/login", {
           "key": key,
       }, {
           headers: {
               "X-Session-Hash": session,
           },
       })
    }
}