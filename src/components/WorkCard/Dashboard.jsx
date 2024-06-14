import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex '>
            <div className="w-64 min-h-full bg-orange-400">
                 <li className='menu'>
                    <li> <NavLink to="dashboard/cart">My Cart</NavLink> </li>
                    <li> <NavLink></NavLink> </li>
                    <li> <NavLink></NavLink> </li>
                    
                 </li>
            </div>

            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;