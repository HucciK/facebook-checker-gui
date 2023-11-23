import { open } from '@tauri-apps/api/dialog';
import {useContext, useEffect, useState} from "react";
import {StoreContext} from "../../main.jsx";
import styles from "./Settings.module.css"

function Settings() {
    const {settings} = useContext(StoreContext);
    const [checkPath, setCheckPath] = useState(settings.paths?.path_to_check || 'Не указан');
    const [savePath, setSavePath] = useState(settings.paths?.path_to_save || 'Не указан');

    async function select(setter) {
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
        settings.setPaths({
            path_to_check: checkPath,
            path_to_save: savePath
        })
    }, [checkPath,savePath]);


    return (
        <div className={styles.settings}>
            <div className={styles.settings_header}>SETTINGS</div>
            <div className={styles.settings_internal}>
                <div className={styles.paths_settings}>
                    <div className={styles.path_setting}>
                        <span className={styles.path_span}>Путь к логам: {checkPath}</span>
                        <button className={styles.change_button} onClick={() => select(setCheckPath)}>Изменить</button>
                    </div>

                    <div className={styles.path_setting}>
                        <span className={styles.path_span}>Путь сохранения: {savePath}</span>
                        <button className={styles.change_button} onClick={() => select(setSavePath)}>Изменить</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Settings;