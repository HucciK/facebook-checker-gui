import Sidebar from "../Sidebar/Sidebar.tsx";
// @ts-ignore
import styles from "./Home.module.css";
import {motion as m} from "framer-motion";
import {Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
);

function Home() {
    const doughnutData = {
        labels: [],
        datasets: [{
            data: [20,6, 10],
            backgroundColor: ["#1f4645", "#3abdcf", "#cc6d6d"],
            borderColor: ["#1f4645", "#3abdcf", "#cc6d6d"]
        }]
    }

    const lineData = {
        labels: ["10", "20", "30"],
        datasets: [{
            data: [65, 59, 80],
            fill: false,
            borderColor: "#3abdcf",
            tension: 0.1
        }]
    };

    const lineOption = {
        plugins: {
            legend: {
                display: false
            }
        }
    }


    return (
        <div className={styles.home}>
            <Sidebar/>
            {/*initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} exit={{opacity:0}}*/}
            <m.div className={styles.home_content + " content"}>
                <div className={styles.home_content_header}>HOME</div>
                <div className={styles.home_statistics}>
                    <div className={styles.home_statistics_points}>
                        {/*//TODO вынести в компонент статистику*/}
                        <span className={styles.home_statistics_point}>Всего проверено:</span>
                        <span className={styles.home_statistics_point}>Всего спендов:</span>
                        <span className={styles.home_statistics_point}>Тотал всех спендов:</span>
                        <span className={styles.home_statistics_point}>Потенциальный профит:</span>
                        <div className={styles.home_statistics_diagram}>
                            <Doughnut data={doughnutData}/>
                        </div>
                    </div>
                    <div className={styles.home_statistics_graph}>
                        <div className={styles.home_statistics_graph_render}>
                            <Line data={lineData} options={lineOption}/>
                        </div>
                        <span className={styles.home_statistics_graph_header}>Потенциальный профит по дням</span>
                    </div>
                </div>
            </m.div>
        </div>
    );
}

export default Home;