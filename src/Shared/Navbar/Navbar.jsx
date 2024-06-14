import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa";
import useCart from "../../hooks/useCart";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] =useCart()

    const navOptions = <>

        <li> <Link to="/ourservice">Contact Us</Link></li>
        <li> <Link to="/pandingwork">PandingWork</Link></li>
        <li>
            <Link to="/dashboard">
                <button className="btn">
                <FaCartArrowDown className="mr-2"/>
                    <div className="badge badge-secondary">{cart.length}</div>
                </button>
            </Link>
        </li>
        <li> <Link to="/">Dashbroad</Link></li>
        <li> <Link to="/signup">Sign Up</Link></li>
        <li> <Link to='sec'>sec</Link></li>

        
        {!user && <li><Link to='/login'>Login</Link></li>}







    </>
    return (



        <div className='navbar bg-[#50C878] text-white shadow-sm container  px-4 mx-auto'>
            <div className='flex-1'>
                <Link to="/" className='flex gap-2 items-center'>
                    <img className='w-auto h-7' alt='' />
                    <span className=' font-bold text-2xl font bold' >Lux<span className="text-orange-500">Stay</span> </span>
                </Link>
            </div>


            <div className='flex-none' role="button" >
                <ul className='menu menu-horizontal px-1 gap-2 '>
                    {navOptions}
                </ul>

                {
                    user &&
                    <div className='dropdown dropdown-end z-50'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle avatar'
                        >
                            <div title={user?.displayName} className='w-10 rounded-full' >
                                <img
                                    referrerPolicy='no-referrer'
                                    alt='User Profile Photo'
                                    src={user?.photoURL}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                        >

                            <li className='mt-2'>
                                <button onClick={logOut} className='bg-gray-100 text-black block text-center '>Logout</button>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;