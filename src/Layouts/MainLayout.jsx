import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1>Content</h1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;