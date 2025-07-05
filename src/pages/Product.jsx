import React from 'react'
import { ResponsiveContainer,BarChart,Bar,XAxis, YAxis, CartesianGrid, Legend, AreaChart, Area} from 'recharts';

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
const Product = () => {
  return (
    <div >
      <h1>Product Page</h1>
      <h1>Area Chart</h1>
      <ResponsiveContainer width="80%" aspect={3}>
        <AreaChart data={pdata}>
          <CartesianGrid/>
        <XAxis dataKey="name" interval={'preserveStartEnd'}/>
        <YAxis/>       
        <Legend/>   
        <Area dataKey="students"/>
        <Area dataKey="fee"/>
        </AreaChart>
      </ResponsiveContainer>
      
    </div>
  )
}

export default Product