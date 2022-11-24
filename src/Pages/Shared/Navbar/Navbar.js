import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import logo from '../../../assets/logo.png'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(err => console.log(err));
  }

  const menuItems = <>
    <li className=' py-1 px-4 lg:px-0'><Link to="/home" className='font-medium'>Home</Link></li>
    <li className='lg:mx-1 py-1 px-4 lg:px-0'><Link to="/appointment" className='font-medium'>Appointment</Link></li>
    <li className='lg:mx-1 py-1 px-4 lg:px-0'><Link to="/dashboard" className='font-medium'>Dashboard</Link></li>
    <li className='lg:mx-1 py-1 px-4 lg:px-0'><Link to="/reviews" className='font-medium'>Reviews</Link></li>
    <li className=' py-1 px-4 lg:px-0'><Link to="/about" className='font-medium'>About</Link></li>

    {user?.uid ?
      <>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li>
          <button onClick={handleLogOut}>Sign out</button>
        </li>
      </>
      :
      <li className=' py-1 px-4 lg:px-0'>
        <Link to="/login" className='font-semibold'>Log in</Link>
      </li>
    }
  </>

  return (
    <div className="navbar sticky top-0 z-40 bg-slate-50/60 backdrop-blur-2xl transition-colors duration-500 dark:bg-[#0B1120]/80 flex justify-between ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="">
          <img src={logo} className='w-16' alt="Aero" title='Home' />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
        </ul>
      </div>
      <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
    </div>
  );
};

export default Navbar;