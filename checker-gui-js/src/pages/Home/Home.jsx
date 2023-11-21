import styles from "./Home.module.css"
import {Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import Statistics from "../../components/UI/Statistics/Statistics.jsx";

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
            <div className={styles.home_header}>HOME</div>
            <div className={styles.home_internal}>
                <div className={styles.home_internal_left_wrap}>
                    <Statistics/>
                    <div className={styles.doughnut_graph}>
                        <Doughnut data={doughnutData}/>
                    </div>
                </div>
                <div className={styles.line_graph}>
                    <div className={styles.line_graph_render}>
                        <Line data={lineData} datatype={"line"} options={lineOption}/>
                    </div>
                    <span className={styles.line_graph_text}>Потенциальный профит по дням</span>
                </div>
            </div>
        </div>
    )
}

export default Home;