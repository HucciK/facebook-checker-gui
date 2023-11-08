import { makeAutoObservable } from "mobx"
import {FacebookAccount, FacebookResult} from "../core/FacebookAccount.ts";
import {CheckerSettings} from "../core/Settings.ts";
import WebSocket from "tauri-plugin-websocket-api";



const CHECK_URL = "ws://localhost:8080/facebook/start"

export default class Check {
    isConnected = false
    result:FacebookAccount[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setConnected(bool: boolean) {
        this.isConnected = bool
    }

    parseReceived(data:any) {
        try {
            let r:FacebookResult = JSON.parse(data.toString())
            this.result.push(r.data)
        } catch (e) {
            console.log("json parse error", e)
        }
    }

    isClosed(frame:any) {
         if (frame?.type == "Close") {
             this.setConnected(false)
         }
    }

    removeResult() {
        this.result.splice(0)
    }

    async start(settings:CheckerSettings, hash:string) {
        this.result.splice(0)
        try {
            const  ws = await WebSocket.connect(CHECK_URL, {
                headers: {
                    "X-Session-Hash": hash
                }
            })
            this.setConnected(true)
            console.log(this.isConnected)
            ws.send(JSON.stringify(settings))
            ws.addListener((m) => this.isClosed(m))
            ws.addListener((m) => this.parseReceived(m.data))
        } catch (e:any) {
            console.log(e)
        }
    }
}
