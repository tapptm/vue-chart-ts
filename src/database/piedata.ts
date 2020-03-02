
import PieChart from "../interface/PieChart"

export const data : PieChart = {
    labels: ['Promotion New User', 'Promotion HBD','Promotion invite friend'],
    datasets: [{
        backgroundColor: ["rgb(40, 190, 10)", "rgb(160, 12, 12)" ,"  rgb(15, 132, 161)"],
        data: [3000, 1500, 2000]
    }]
};

export const options = {
    hoverBorderWidth: 20,
    responsive: true,
    maintainAspectRatio: false,
    tooltips:{
        callbacks:{
            label(tooltipItem:any ,data:any) {
                var dataset = data.datasets[tooltipItem.datasetIndex];
                var meta = dataset._meta[Object.keys(dataset._meta)[0]]
                var total = meta.total;
                var currentValue = dataset.data[tooltipItem.index];
                var percentage = parseFloat((currentValue/total*100).toFixed(1))
                return currentValue + ' ('+ percentage +'%)'
            },
            title(tooltipItem:any,data:any){
                return data.labels[tooltipItem[0].index];
            }
        }
    }
}

