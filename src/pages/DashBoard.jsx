import React from 'react'
import { ResponsiveContainer,BarChart,Bar,XAxis,Tooltip, YAxis, CartesianGrid, Legend} from 'recharts';

  const pdata=[
    {
      name:"HTML",
      students:30,
      fee:2000
  },
  {
    name:"CSS",
    students:25,
    fee:2500
},
{
  name:"JAVASCRIPT",
  students:20,
  fee:3000
},
{
  name:"REACT.JS",
  students:15,
  fee:3500
},
{
  name:"PYTHEN",
  students:12,
  fee:4000
},
{
  name:"PHP",
  students:10,
  fee:4500
},
{
  name:"JAVA",
  students:5,
  fee:5000
}
];
const DashBoard = () => {
  return (
    <div>
      <h1>DashBoard Page</h1>
      <h1>Bar Chart</h1>
      <ResponsiveContainer width="80%" aspect={3}>
        <BarChart data={pdata}>
          <CartesianGrid/>
        <XAxis dataKey="name" interval={'preserveStartEnd'}/>
        <YAxis/>       
        <Legend/>   
        <Bar dataKey="students"/>
        {/* <Bar dataKey="fee"/> */}
        <Tooltip contentStyle={{backgroundColor:"yellow"}} /> 
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DashBoard;