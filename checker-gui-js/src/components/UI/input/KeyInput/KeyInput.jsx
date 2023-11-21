import styles from "./KeyInput.module.css"

function KeyInput(props) {
    return (
        <input className={styles.key_input} {...props}/>
    );
}

export default KeyInput;