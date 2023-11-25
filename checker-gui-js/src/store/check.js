import WebSocket from "tauri-plugin-websocket-api";
import {makeAutoObservable} from "mobx";

const CHECK_URL = "ws://localhost:8080/facebook/start";

export default class Check {
    accounts = [];
    isConnected = false;
    counter = 0;

    checkClosed = (msg) =>  {
        if (msg.type === "Close") {
            this.setIsConnected(false);
        }
    }

    addAccount = (rawMsg) => {
        if (!this.isConnected) {
            return
        }
        const msg = JSON.parse(rawMsg.data)
        console.log(msg)
        if (msg.type === "Error") {
            this.counter++
            return;
        }

        this.accounts.push(msg.data.stats)
    }

    removeAccounts = () => {
        this.accounts.splice(0)
    }

    setCounter(i) {
        this.counter = i
    }

    setIsConnected = (bool) => {
        this.isConnected = bool;
    }

    constructor() {
        makeAutoObservable(this)
    }

    async start(hash, paths) {
        this.removeAccounts();
        this.setCounter(0);
        this.setIsConnected(true);
        try {
            const  ws = await WebSocket.connect(CHECK_URL, {
                headers: {
                    "X-Session-Hash": hash,
                }
            });

            ws.send(JSON.stringify({
                paths: paths
            }));

            ws.addListener((m) => this.checkClosed(m));
            ws.addListener((m) => this.addAccount(m));
        } catch (e) {
            console.log(e)
        }

    }
}