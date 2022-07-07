import React, { useEffect, useRef, useState } from 'react';
import '../../../assets/css/HomeChart.scss';
import moment from 'moment';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { getOrderTime } from 'api/orderAdminApi';
import getTopProduct from 'api/topProductAPI';
import TopProduct from './TopProduct';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);
interface BackgroundColor {
  week: string;
  month: string;
  year: string;
}
interface ChartRef {
  current: any;
  ctx: any;
  createLinearGradient: any;
}
interface OrderDay {
  date: string;
  totalAmount: number;
  totalOrder: number;
}
interface OrderMonth {
  month: number;
  totalAmount: number;
  totalOrder: number;
}
const HomChart = () => {
  const [time, setTime] = useState<string>('day');
  const [orderData, setOrderData] = useState([]);

  const [weekState, setWeekState] = useState<string[]>();

  let week: string[] = [];
  let month: string[] = [];
  useEffect(() => {
    const getProduct = async () => {
      const dataOrder = await getOrderTime(time);
      await setOrderData(dataOrder);

      var dayTime = orderData?.map((item: OrderDay) =>
        week.push(moment(item.date).format('DD-MM'))
      );
    };
    getProduct();
  }, [time]);

  const chartRef = useRef<ChartRef | any>(null);

  const [timeGapBG, setTimeGapBG] = useState<BackgroundColor>({
    week: 'bg-yellow',
    month: '',
    year: '',
  });

  orderData?.map((item: OrderDay) => week.push(moment(item.date).format('DD-MM')));
  const dataDayTime = week;

  orderData?.map((item: OrderMonth) => month.push(item.month?.toString()));

  let year = ['January', 'February', 'March', 'April', 'May', 'June'];

  let weekData = [5, 5, 4, 4, 5, 4, 4];
  let monthData = [4, 4, 5, 4, 4, 5, 6];
  let yearData = [4, 4, 4, 5, 4, 9.5];

  const findMax = (arr: number[], increase: number) => {
    let max = Math.max(...arr);

    return max + increase;
  };
  const findMin = (arr: number[], decrease: number) => {
    let min = Math.min(...arr);

    return min - decrease;
  };

  const [labels, setLabels] = useState<string[]>(week);
  const [dataTime, setDataTime] = useState<number[]>(weekData);

  const handleWeekClick = () => {
    setTime('day');
    setLabels(dataDayTime);
    setTimeGapBG({ week: 'bg-yellow', month: '', year: '' });
    setDataTime(weekData);
  };
  const handleMonthClick = async () => {
    await setTime('month');

    //setLabels(dataMonthTime);
    setTimeGapBG({ week: '', month: 'bg-yellow', year: '' });

    //  setLabels(dataMonthTime);
  };

  const gradient = chartRef.current?.ctx.createLinearGradient(0, 0, 0, 150);

  gradient?.addColorStop(0, 'rgba(250,174,50,1)');
  gradient?.addColorStop(1, 'rgba(250,174,50,0)');

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
    elements: {
      line: {
        borderWidth: 3,
        borderColor: '#ffff',
        backgroundColor: '#cccccc',
        fill: '',
      },
    },
  };

  return (
    <div className="m-4 grid grid-cols-1 xl:grid-cols-2 row-gap-4 col-gap-4" style={{}}>
      <div className="chart-dashboard col-12 shadow-lg mt-xl-20 ">
        <div className="header-content">Đơn Hàng / Doanh Số</div>

        <hr className="border-b border-gray-200 mb-2" />
        <div className="chart-header row justify-between">
          <div className="chart-time mt-md-20  ">
            <div className={`time-gap ${timeGapBG.week}`} onClick={() => handleWeekClick()}>
              Tuần
            </div>
            <div className={`time-gap ${timeGapBG.month}`} onClick={() => handleMonthClick()}>
              Năm
            </div>
          </div>

          <div className="chart-time mt-md-20  d-flex justify-end">
            <div className={`report bg-purple`}>Đơn hàng</div>
          </div>
        </div>

        <div style={{ marginTop: '40px' }}></div>
        <Line ref={chartRef} options={options} data={data} />
      </div>
      <TopProduct />
    </div>
  );
};

export default HomChart;
