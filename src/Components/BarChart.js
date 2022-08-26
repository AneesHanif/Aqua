import { Bar } from "react-chartjs-2";
import {chart as chartjs} from 'chart.js/auto'
import './BarChart.css'

export default function BarChart(){
 
    const data={
         labels:["Janvary" , "Febuarary", "March", "Aprail", "May", "Jun", "July", "August" , "September", "October", "November","December"],
        datasets:[{
            label:"USERS",
            data: [1,5,10,50,40,70,60,65,100,120,122,130],
            fill:false,
            backgroundColor: "Blue",
            borderColor: "White",
              

        }],
    
    }
    return(
        <div className="BarChart">
        <Bar  data={data}/> 
        </div>
    )
}