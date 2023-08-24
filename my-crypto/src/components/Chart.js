import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,Tooltip,
  Legend}from "chart.js"
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
const Chart = ({arr=[],currency,days}) => {
  const prices=[];
  const date=[]
  for(let i=0; i<arr.length;i++){
    if(days=="24h")date.push(new Date(arr[i][0]).toLocaleTimeString());
   else date.push(new Date(arr[i][0]).toLocaleDateString());
    prices.push(arr[i][1]);
  }
  const data={
    labels:date,
    datasets:[{
      label:`Price in ${currency}`,
      data:prices,borderColor:"rgb(255,99,132)",
      backgroundColor:"rgb(255,99,132,0.5)"
    }]
  }
  return (
    <div className='flex flex-col justify-center items-center mt-3'>
      <h1 className='text-bold text-xl'>Chart</h1>
    <div className='w-[700px] h-[500px]'>  <Line
      options={{responsive:true,
      }}
      data={data} className=''/> </div>
    </div>
  )
}

export default Chart