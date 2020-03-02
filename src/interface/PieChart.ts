export default interface Data {
    labels :string[];
    datasets: DataSet[];
}

interface DataSet {
    backgroundColor:string[];
    data: number[];
}