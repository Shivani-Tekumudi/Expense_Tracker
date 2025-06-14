import React, { PureComponent } from 'react';
import {
  ComposedChart,
BarChart,
  Bar,
  XAxis,
  YAxis,
  
  ResponsiveContainer,
} from 'recharts';



export default class TopexpensesBarchart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/vertical-composed-chart-6r8xmw';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          width={500}
          height={400}
        data={this.props.data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
         
        >
         
          <XAxis type="number" axisLine={false} hide />
          <YAxis dataKey="name" type="category" scale="band" axisLine={false} />
         
          
         
          <Bar dataKey="price" barSize={20} fill="#413ea0" />
         
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
