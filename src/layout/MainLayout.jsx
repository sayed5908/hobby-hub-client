import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/Navbar';
import Banner from '../component/Banner';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>

            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;