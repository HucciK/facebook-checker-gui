// @ts-ignore
import styles from "./Settings.module.css";
import Sidebar from "../Sidebar/Sidebar.tsx";
import {useContext, useEffect, useState} from "react";
import { open } from '@tauri-apps/api/dialog';
import {StateContext} from "../../index.tsx";

function Settings() {
    const {settings} = useContext(StateContext);
    const [checkPath, setCheckPath] = useState<string>(settings?.checker?.paths?.path_to_check || 'Не указан');
    const [savePath, setSavePath] = useState<string>(settings?.checker?.paths?.path_to_save || 'Не указан');

    async function select(setter:Function) {
        const selected = await open({
            multiple: false,
            directory: true,
            filters: [{
                name: 'save',
                extensions: [],
            }],
            defaultPath: "./",
        });
        if (!Array.isArray(selected) && selected) {
            setter(selected)
        }
    }

    useEffect(() => {
        settings.updatePaths({
            path_to_check: checkPath,
            path_to_save: savePath
        })
    }, [checkPath,savePath]);

    return (
        <div className={styles.settings}>
            <Sidebar/>
            <div className={styles.settings_content + " content"}>
                <div className={styles.settings_content_header}>SETTINGS</div>
                <div className={styles.settings_content_checkpath}>
                    <span>Путь к логам: {checkPath}</span>
                    <button onClick={() => select(setCheckPath)}>Изменить</button>
                </div>

                <div className={styles.settings_content_savepath}>
                    <span>Путь сохранения: {savePath}</span>
                    <button onClick={() => select(setSavePath)}>Изменить</button>
                </div>
            </div>
        </div>
    )
}

export default Settings;
