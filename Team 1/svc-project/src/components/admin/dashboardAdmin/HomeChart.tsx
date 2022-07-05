
import React, { useRef, useState } from 'react'
import "../../../assets/css/HomeChart.scss"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
 
  Tooltip,
 
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);
interface BackgroundColor {
  day: string;
  week: string;
  month: string;
  year: string;
}
interface ChartRef {
  current: any;
  ctx: any;
  createLinearGradient: any;
}
const HomChart = () => {

      const chartRef=useRef<ChartRef|any>(null);

      const [timeGapBG, setTimeGapBG] = useState<BackgroundColor>({
        day: 'bg-yellow',
        week: '',
        month: '',
        year: '',
      });
         const day = [
           '03:00 PM',
           '04:00 PM',
           '05:00 PM',
           '06:00 PM',
           '07:00 PM',
           '08:00 PM',
           '09:00 PM',
         ];
         const week = ['14/06', '15/06', '16/06', '17/06', '18/06', '19/06', '20/06'];
         const month = ['01/06', '07/06', '14/06', '15/06', '16/06', '17/06'];
         const year = ['January', 'February', 'March', 'April', 'May', 'June'];
         
         const dayData = [6, 6, 6, 6, 6, 6, 6.5];
         const weekData = [5, 5, 4, 4, 5, 4, 4];
         const monthData = [4,4, 5, 4, 4,5, 6];
         const yearData = [4, 4, 4, 5, 4, 9.5];
   
      const findMax= ( arr: number[], increase : number ) => {
     
        let max = Math.max(...arr);
        
        return max + increase
      }
       const findMin = (arr: number[], decrease: number ) => {
         let min = Math.min(...arr);
        console.log("min: ", min)
         return min - decrease;
         
       };


      const[labels,setLabels] = useState<string[]>(day)
      const [dataTime,setDataTime]= useState<number[]>(dayData)

      const handleDayClick = () => {
        setTimeGapBG({ day: 'bg-yellow', week: '', month: '', year: '' });
        setLabels(day);
        setDataTime(dayData)
      };
      const handleWeekClick = () => {
        setTimeGapBG({ day: '', week: 'bg-yellow', month: '', year: '' });
        setDataTime(weekData);
        setLabels(week);
         
      };
      const handleMonthClick = () => {
        setTimeGapBG({ day: '', week: '', month: 'bg-yellow', year: '' });
         setLabels(month);
          setDataTime(monthData);
      };
      const handleYearClick = () => {
        setTimeGapBG({ day: '', week: '', month: '', year: 'bg-yellow' });
         setLabels(year);
          setDataTime(yearData);
      };
      

      console.log("chart ref: ",chartRef)
        const gradient= chartRef.current?.ctx.createLinearGradient(0,0,0,150)
     
        gradient?.addColorStop(0, 'rgba(250,174,50,1)');
        gradient?.addColorStop(1, 'rgba(250,174,50,0)');
        console.log('gradient', gradient);
      const data = {
        labels,
        datasets: [
          {
            // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            fill: true,
            backgroundColor: '#c6f6d5',
            data: dataTime,
            borderColor: '#00ec27',
          },
        ],
      };
      const options = {
        scales: {
          yAxis: {
            min: findMax(dataTime, 1),
            max: findMin(dataTime, 4),
            stepSize: 3,
            
          },
        },
        elements:{
          line:{
            borderWidth:3,
            borderColor: "#ffff",
            backgroundColor:"#cccccc",
            fill: ""
          }
        }
        }
    
// const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' as const,
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart',
//     },
//   },
// };
  return (
    <div className="m-4 grid grid-cols-1 md:grid-cols-2 row-gap-4 col-gap-4" style={{}}>
      <div className="chart-dashboard col-12 shadow-lg mt-xl-20 ">
        <div className="header-content">Đơn Hàng / Doanh Số</div>

        <hr className="border-b border-gray-200 mb-2" />
        <div className="chart-header row justify-between">
          <div className="chart-time mt-md-20  ">
            <div className={`time-gap ${timeGapBG.day}`} onClick={() => handleDayClick()}>
              24H
            </div>
            <div className={`time-gap ${timeGapBG.week}`} onClick={() => handleWeekClick()}>
              1W
            </div>
            <div className={`time-gap ${timeGapBG.month}`} onClick={() => handleMonthClick()}>
              1M
            </div>
            <div className={`time-gap ${timeGapBG.year}`} onClick={() => handleYearClick()}>
              1Y
            </div>
          </div>

          <div className="chart-time mt-md-20  ">
            <div className={`report bg-purple`}>Đơn hàng</div>
            <div className={`report ${timeGapBG}`}>Doanh Thu</div>
          </div>
        </div>

        <div style={{ marginTop: '40px' }}></div>
        <Line ref={chartRef} options={options} data={data} />
      </div>

      <div className="chart-dashboard col-12 shadow-lg mt-xl-20 ">
        <div className="header-content">Top sản phẩm bán chạy</div>

        <hr className="border-b border-gray-200 mb-2" />
      </div>
    </div>
  );
}

export default HomChart