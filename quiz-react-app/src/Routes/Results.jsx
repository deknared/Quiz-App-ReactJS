import React, {useContext} from 'react'
import {
    PieChart,
    Pie,
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Cell
  } from "recharts";
import { Counter } from './counter';
import Confetti from 'react-confetti';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const Results = () => {
  const {correct, setCorrect, incorrect, setIncorrect} = useContext(Counter);

  const incomplete = 7 - (incorrect+correct)
  const data01 = [
    { name: "Correct", value: correct },
    { name: "Incorrect", value: incorrect },
    { name: "Incomplete", value: incomplete },
  ];


    
    const data = [
  {
    name: "Correct",
    "%": 55,
    score: correct
    // amt: 10,
    //cnt: 49
  },
  {
    name: "Incorrect",
    "%": 35,
    score: incorrect
    //amt: 10,
    // cnt: 50
  },
  {
    name: "Incomplete",
    "%": 10,
    score: incomplete
    //amt:11,
    //cnt:10
  }
];    

//function confetti1(correct1){
//    return((correct1)?<Confetti width={1500} height={1200}/>:null)
//}
function confetti1(){
if (correct===7){
  return(<Confetti width={1500} height={1200} />)
}
}
    return (
        <div>
            <h1 className="display-4" > YOUR REPORT </h1> 
            {confetti1()}
            <div className="results">
            <center> 
            <PieChart width={900} height={400}>
              <Pie
                datakey="value"
                isAnimationActive={false}
                data={data01}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="rgba(38, 99, 71, 0.5)"
                label>
                
              
              {data01.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              </Pie>
              <Tooltip/>
              </PieChart> </center>
            <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 50,
          right: 50,
          bottom: 50,
          left: 100
        }}
      >
        
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis datakey="" />
        <Tooltip />
        <Legend />
       
        <Bar dataKey="score" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="score" stroke="#ff7300" />

      </ComposedChart> </div>
        </div>
    )
}

export default Results
