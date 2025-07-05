import React from 'react'
import { FcPhone } from "react-icons/fc";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const About = () => {
  const classData=[
    {
      name:"HTML",
      students:1240,
      fee:2000
    },
    {
      name:"CSS",
      students:535,
      fee:2300
    },
    {
      name:"JAVASCRIPT",
      students:1050,
      fee:4000
    },
    {
      name:"REACT.JS",
      students:2920,
      fee:2280
    },
    {
      name:"BOOTSTRAP",
      students:2090,
      fee:3600
    },
    {
      name:"PHP",
      students:2322,
      fee:500
    }
  ]
  return (
    <div>
      <h1>About Page</h1>
     <h1>Line Chart</h1>

     <ResponsiveContainer width="100%" aspect={3}>
       <LineChart data={classData}>
        <CartesianGrid/>
        <XAxis dataKey="name" interval={"preserveStartEnd"} stroke='black'/>
        <YAxis/>
        <Line type="monotone" dataKey="students" stroke='red' activeDot={{r:9}}/>
        <Line type="monotone" dataKey="fee" stroke='green' activeDot={{r:9}}/>
        <Tooltip contentStyle={{backgroundColor:"yellow"}} /> 
        <Legend/>
       </LineChart>
     </ResponsiveContainer>

    </div>
  )
}

export default About