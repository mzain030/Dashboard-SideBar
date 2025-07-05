import React from 'react'
import { CartesianGrid, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const Comment = () => {
  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
  ];
  const data03 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const data04 = [
    { name: 'HTML 1', value: 400 },
    { name: 'HTML 2', value: 500 },
    { name: 'HTML 3', value: 600 },
    { name: 'BOOTSTRAP 1', value: 80 },
    { name: 'BOOTSTRAP 2', value: 40 },
    { name: 'BOOTSTRAP 3', value: 30 },
    { name: 'BOOTSTRAP 4', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
  ];
  return (
    <div>
      <h1>Comment Page</h1>
      <h1>Pie Charts</h1>
      <ResponsiveContainer width="100%" aspect={4}>
        <PieChart width={400} height={400}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
          <Tooltip/>
        </PieChart>
      </ResponsiveContainer>
      <hr />
      <ResponsiveContainer width="100%" aspect={4}>
        <PieChart width={400} height={400}>
          <Pie data={data03} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data04} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
          <Tooltip/>
        </PieChart>
      </ResponsiveContainer>

    </div>
  )
}

export default Comment