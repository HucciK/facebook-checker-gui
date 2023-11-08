import {CheckerPaths, CheckerSettings, InternalSettings} from "../core/Settings.ts";
import {makeAutoObservable} from "mobx";

const checkerSettingsKey = "checker_settings"
const internalSettingsKey = "internal_settings"

export default class Settings {
    storageInternalSettings = localStorage.getItem(internalSettingsKey)
    storageCheckerSettings = localStorage.getItem(checkerSettingsKey)

    internal:InternalSettings = this.storageInternalSettings ? JSON.parse(this.storageInternalSettings) : {}
    checker:CheckerSettings = this.storageCheckerSettings ? JSON.parse(this.storageCheckerSettings) : {}

    constructor() {
        makeAutoObservable(this);
    }

    setInternal(internal:InternalSettings) {
        this.internal = internal
    }

    setChecker(checker:CheckerSettings) {
        localStorage.setItem(checkerSettingsKey, JSON.stringify(checker))
        this.checker = checker
    }

    updatePaths(paths:CheckerPaths) {
        let checker:CheckerSettings = this.checker
        checker.paths = paths
        this.setChecker(checker)
    }
}