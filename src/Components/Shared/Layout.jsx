
{/*import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
    return (
        <div className='flex flex-row bg-neutral-100 h-screen w-[100%]'>
            <Sidebar />
            <div className="p-2 main-content-div">
                <Header />
                <div><Outlet /></div>
            </div>
        </div>
    );
};

export default Layout;*/}


import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
    return (
        <div className='flex flex-row bg-neutral-100 h-screen'>
            <Sidebar />
            <div className="flex-1 p-2 main-content-div">
                <Header />
                <div className='dashboard-outlet w-[100%]'><Outlet /></div>
            </div>
        </div>
    );
};

export default Layout;



