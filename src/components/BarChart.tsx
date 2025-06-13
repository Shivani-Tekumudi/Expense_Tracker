import React, { PureComponent } from 'react';
import {
  ComposedChart,
BarChart,
  Bar,
  XAxis,
  YAxis,
  
  ResponsiveContainer,
} from 'recharts';

const data = [
    
   {
    name: 'Food',
    uv: 197,
    pv: 1098,
    amt: 989,
  },
  {
    name: 'Entertainment',
    uv: 190,
    pv: 800,
    amt: 1400,
  },
  {
    name: 'travel',
    uv: 168,
    pv: 967,
    amt: 1506,
  },
 
 
  
];

export default class TopexpensesBarchart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/vertical-composed-chart-6r8xmw';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
         
        >
         
          <XAxis type="number" axisLine={false} hide />
          <YAxis dataKey="name" type="category" scale="band" axisLine={false} />
         
          
         
          <Bar dataKey="uv" barSize={20} fill="#413ea0" />
         
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
