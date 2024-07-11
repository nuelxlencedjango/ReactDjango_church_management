import React from 'react';
import { Tooltip, Legend, Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
    { name: 'Jan', Expense: 4800, Income: 10000 },
    { name: 'Feb', Expense: 5400, Income: 15000 },
    { name: 'Mar', Expense: 400, Income: 6000 },
    { name: 'Apr', Expense: 2000, Income: 7000 },
    { name: 'May', Expense: 2500, Income: 9000 },
    { name: 'Jun', Expense: 5000, Income: 18000 },
    { name: 'Jul', Expense: 3800, Income: 12000 },
    { name: 'Aug', Expense: 3000, Income: 11000 },
    { name: 'Sep', Expense: 6000, Income: 18000 },
    { name: 'Oct', Expense: 4000, Income: 6000 },
    { name: 'Nov', Expense: 9800, Income: 22000 },
    { name: 'Dec', Expense: 11400, Income: 30000 },
];

const CellChart = () => {
    return (
        <div className='h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1 cell-membership-box'>
            <strong className='text-gray-700 font-medium cell-chat-heading'>Cell Membership Chart</strong>
            <div className='w-full mt-3 flex-1 text-xs'>
                <ResponsiveContainer width="100%" height="100%" className="bar-chart-responsive">
                    <BarChart 
                        data={data}
                        margin={{
                            top: 20,
                            right: 10,
                            left: -10,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis className='y-text'/>
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Income" fill="#0ea5e9" />
                        <Bar dataKey="Expense" fill='#ea580c' />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default CellChart;
