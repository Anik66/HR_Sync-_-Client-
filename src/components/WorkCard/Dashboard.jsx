import React from 'react';
import { FaCalendar, FaHome, FaList, FaPeopleCarry, FaSearch, FaShoppingCart, FaUserFriends, FaVoicemail } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa6';
import { MdRateReview } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { IoMdContact } from 'react-icons/io';
import { TbBrandBooking } from 'react-icons/tb';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [cart] =useCart()
    const [isAdmin] =useAdmin()
    console.log(isAdmin)
    return (
        <div className='flex '>
            <div className="w-64 min-h-screen bg-orange-400">
                 <ul className='menu p-4'>

                       {
                        isAdmin ? <>
                        <li>
                        
                        <NavLink to="dashboard/adminHome"> <FaHome></FaHome>Admin Home</NavLink> 
                        </li>

                       <li>
                        
                        <NavLink to="dashboard/addWork"> <FaPeopleCarry/> Add Work</NavLink> 
                        </li>

                         <li>
                        
                         <NavLink to="dashboard/cart"> <FaList></FaList> Manage Work </NavLink> 
                         </li>
                         <li>
                        
                         <NavLink to="dashboard/bookings">  <TbBrandBooking/> Manage Bookings</NavLink> 
                         </li>

                         <li>
                        
                         <NavLink to="dashboard/users"> <FaUserFriends/>All Employees</NavLink> 
                         </li>
                        </> :
                        <>
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
                        </>
                       }
                         {/* shared navlink */}
                    
                    <div className='divider'></div>

                    <li>
                        
                        <NavLink to="/"> <FaHome></FaHome>User Home</NavLink> 
                        </li>
                    <li>
                        
                        <NavLink to="/pandingwork"> <FaSearch></FaSearch> Show Work</NavLink> 
                        </li>
                    <li>
                        
                        <NavLink to="/ourservice"> <IoMdContact />
                        Contact</NavLink> 
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