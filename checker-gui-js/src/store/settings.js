import {makeAutoObservable} from "mobx";

const pathsSettingsKey = "paths_settings"

export default class Settings {
    paths = JSON.parse(localStorage.getItem(pathsSettingsKey)) || {};

    constructor() {
        makeAutoObservable(this);
    }

    setPaths(paths) {
        localStorage.setItem(pathsSettingsKey, JSON.stringify(paths))
        this.paths = paths
    }

}