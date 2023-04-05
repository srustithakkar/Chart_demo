/* eslint-disable array-callback-return */
import React from 'react';
import './App.css';
import ReactECharts from 'echarts-for-react';
import Data from "./Wine-Data.json";
import 'echarts/lib/chart/scatter';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid';

const BarX:any = []
const BarYAxis:any = []
const ScatterXAxis:any = []
const ScatterYAxis:any = []
// eslint-disable-next-line @typescript-eslint/no-unused-vars
for (const element of Object.keys(Data)) {
  Data.map((e:any)=>{
    BarX.push(e["Alcohol"])
    BarYAxis.push(e["Malic Acid"])
    ScatterXAxis.push(e["Color intensity"])
    ScatterYAxis.push(e["Hue"])
  })
} 
const BarXAxis = BarX.filter((element:any, index:Number) => {
  return BarX.indexOf(element) === index;
});

const ScatterPlot = () => {
  const options = {
    xAxis: {
      type: 'value',
      name: "Color intensity",
      max: 5,
      nameLocation: "middle",
      nameGap: 30,
      axisLabel: {
        formatter: '{value}'
      }
    },
    yAxis: {
      type: 'value',
      name: "Hue",
      axisLabel: {
        formatter: '{value}'
      }
    },
    series: [{
      type: 'scatter',
      data: ScatterXAxis.map((x:any, i:any) => [x, ScatterYAxis[i]]),
    }]
  };

  return <ReactECharts option={options} />;
};

interface BarChartProps {
  data: number[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const options = {
    xAxis: {
      type: 'category',
      name: "Alcohol",
      nameLocation: "middle",
      nameGap: 30,
      data: BarXAxis,
    },
    yAxis: {
      type: 'value',
      name: "Malic Acid",
      large: true,
      axisLabel: {
        formatter: '{value}'
      }
    },
    series: [{
      data,
      type: 'bar'
    }]
  };

  return <ReactECharts option={options} />;
};

function App() {

const barData = BarYAxis;

  return (
    <div style={{width: "95vw", margin:"10px"}}>
      <h1>Scatter Plot</h1>
      <ScatterPlot />
      <h1>Bar Chart</h1>
      <BarChart data={barData} />
    </div>
  );
}

export default App;
