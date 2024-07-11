




import React from 'react';
import { Outlet } from 'react-router-dom';

import CellStatstics from './CellStatsGrid';



const Dashboard = () => {
    return (
        <div className='flex flex-col gap-2'>
            <h5 className='user-details'>Hello,Chukwuokolo <span>  - Ifako Cell</span></h5>
            <CellStatstics />
            <Outlet />
        </div>
    );
}

export default Dashboard;


