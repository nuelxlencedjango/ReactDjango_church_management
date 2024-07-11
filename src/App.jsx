import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';

import Layout from './Components/Shared/Layout';
import Dashboard from './Components/Dashboard';
import Products from './Components/Products';
import Login from './Components/UserDetails/Login';

import CellStatstics from './Components/CellStatsGrid';
import CellMembershipChart from './Components/CellMembershipChart';
import BuyerProfileChart from './Components/BuyerProfileChart';


import CellMembers from './Components/TotalCellMembers';
import AddMember from './Components/UserDetails/AddMember';
import Profile from './Components/UserDetails/Profile';
import SundayServiceAttendance from "./Components/SundayServices";
import TuesdayServiceAttendance from "./Components/TuesdayServices";
import CellMeetingAttendance from "./Components/CellMeeting";
import WeelkyCellReport from "./Components/WeeklyCellReport";
import Attendance from "./Components/CheckAttendance";
import CellLeaderSettings from "./Components/Settings";

import "./App.css";
import './index.css';


const App = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashboard />}>
            <Route index element={
              <div className='flex gap-2 statstics-cell'>
                <div className='flex-1 cell-barchart'>
                  <CellMembershipChart />
                </div>
                <div className='w-[30%] cell-piechart'>
                  <BuyerProfileChart />
                </div>
              </div>
            } />
            <Route path="transactions" element={<CellMembershipChart />} />
            <Route path="buyer-profile" element={<BuyerProfileChart />} />

            <Route path="cell_members" element={<CellMembers />} />
            <Route path="/add_member" element={<AddMember />} />
            <Route path="/sunday_service" element={<SundayServiceAttendance />} />
            <Route path="/tuesday_service" element={<TuesdayServiceAttendance />} />
            <Route path="/cell_meeting" element={<CellMeetingAttendance />} />
            <Route path="/weekly_report" element={<WeelkyCellReport />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/check_attendance" element={<Attendance />} />
            <Route path="/settings" element={<CellLeaderSettings />} />
            {/* Add more routes here */}
          </Route>
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
