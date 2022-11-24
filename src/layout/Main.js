import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className='min-h-screen'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Main;