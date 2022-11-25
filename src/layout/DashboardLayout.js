import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Link } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content px-10 lg:px-20 min-h-screen mt-10">
          <Outlet />
        </div>
        <div className="drawer-side font-[Poppins] font-medium">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to='/dashboard/all-users' className='text-center inline-block'>All Users</Link>
            </li>
            <li>
              <Link to='/dashboard/all-sellers' className='text-center inline-block'>All Sellers</Link>
            </li>
            <li>
              <Link to='/dashboard/all-reports' className='text-center inline-block'>All Reports</Link>
            </li>
          </ul>

        </div>
      </div>
    </>
  );
};

export default DashboardLayout;