import styles from "./Statistics.module.css"

function Statistics({total}) {
    return (
        <div className={styles.statistics}>
            <span className={styles.stats_points}>Всего проверено: {total}</span>
            <span className={styles.stats_points}>Всего спендов: -</span>
            <span className={styles.stats_points}>Тотал всех спендов: -</span>
            <span className={styles.stats_points}>Потенциальный профит: -</span>
        </div>
    )
}

export default Statistics;