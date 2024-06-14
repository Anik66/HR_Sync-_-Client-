import React from 'react';
import { FaCalendar, FaHome, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa6';
import { MdRateReview } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const Dashboard = () => {
    const [cart] =useCart()
    return (
        <div className='flex '>
            <div className="w-64 min-h-screen bg-orange-400">
                 <ul className='menu p-4'>

                       <li>
                        
                        <NavLink to="dashboard/userHome"> <FaHome></FaHome>User Home</NavLink> 
                        </li>

                       <li>
                        
                        <NavLink to="dashboard/reservation"> <FaCalendar></FaCalendar> Reservation</NavLink> 
                        </li>

                         <li>
                        
                         <NavLink to="dashboard/cart"> <FaShoppingCart></FaShoppingCart>My Cart ({cart.length}) </NavLink> 
                         </li>
                         <li>
                        
                         <NavLink to="dashboard/review">  <MdRateReview /> Add a Review</NavLink> 
                         </li>

                         <li>
                        
                         <NavLink to="dashboard/bookings"> <FaBook></FaBook> My Bookings</NavLink> 
                         </li>
                    
                    <div className='divider'></div>

                    <li>
                        
                        <NavLink to="/"> <FaHome></FaHome>User Home</NavLink> 
                        </li>
                    <li>
                        
                        <NavLink to="/pandingwork"> <FaSearch></FaSearch> Show Work</NavLink> 
                        </li>

                        
                 </ul>
            </div>

            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;