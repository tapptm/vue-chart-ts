import lineChart from "../interface/LineChart"
import { timeFormat, start, end } from '../utils/dateFormat'
import moment from 'moment';

export function newDate(days: any) {
    return moment().add(days, 'd').toDate();
}

export const chartData: lineChart = {
    labels: [newDate(0), newDate(1), newDate(2), newDate(3)],
    datasets: [
        {
            label: "Receipts",
            borderColor: "rgba(17, 21, 85, 0.777)",
            backgroundColor: "rgba(17, 21, 85, 0.377)",
            fill: "start",
            pointBackgroundColor: "rgba(17, 21, 85, 0.800)",
            data: [3000, 1000, 2000, 3000]
        },
        {
            label: "Expenses",
            borderColor: "rgba(180, 38, 20, 0.766)",
            backgroundColor: "rgba(180, 38, 20, 0.366)",
            fill: "origin",
            pointBackgroundColor: "rgba(180, 38, 20, 0.800)",
            data: [1200, 1400, 2600, 1000]
        }
    ]
};
