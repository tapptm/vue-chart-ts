interface DataSet {
    label: string;
    borderColor: string;
    backgroundColor: string;
    fill: string;
    pointBackgroundColor: string;
    data: number[];
}   

export default interface ChartData {
    labels: any[];
    datasets: DataSet[];
}
