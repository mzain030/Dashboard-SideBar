import React from 'react';
import { ResponsiveContainer,LineChart,Line,XAxis, YAxis, CartesianGrid, Legend} from 'recharts';
const Analatics = () => {
  const pdata=[
    {
      name:"HTML",
      students:3220,
      fee:2000
  },
  {
    name:"CSS",
    students:825,
    fee:2900
},
{
  name:"JAVASCRIPT",
  students:3190,
  fee:3000
},
{
  name:"REACT.JS",
  students:3225,
  fee:3500
},
{
  name:"PYTHEN",
  students:2892,
  fee:4000
},
{
  name:"PHP",
  students:2540,
  fee:4500
},
{
  name:"JAVA",
  students:2225,
  fee:5000
}
]
  return (
    <div>
      <h1>Analatics Page</h1>
      <h1>Line Chart</h1>
      <ResponsiveContainer width="80%" aspect={3}>
        <LineChart data={pdata}>
          <CartesianGrid/>
        <XAxis dataKey="name" interval={'preserveStartEnd'}/>
        <YAxis/>       
        <Legend/>   
        <Line dataKey="students" type='stepAfter' stroke='green'/>
        <Line dataKey="fee" stroke='red'/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Analatics;