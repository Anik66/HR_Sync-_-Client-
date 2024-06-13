import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';

const WorkCard = ({item}) => {

    const { _id,salary, designation, photo }=item

    const {user} =useAuth()
    const navigate =useNavigate()
    const location =useLocation()
    const axiosSecure =useAxiosSecure()
    const [,refetch] =useCart()
     const handleAddToCart =(work)=>{
        if(user && user.email){
            console.log(user.email,work)
            const cartItem ={
                menuId:_id,
                email:user.email,
               
                salary,
                designation,
                photo
            }
            axiosSecure.post('/carts',cartItem)
            .then(res =>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      //refetch the card
                      refetch()
                }
            })

        }

        else{
            Swal.fire({
                title: "You are not login",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login',{state:{from:location}})
                }
              });

        }
     }
    
 

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${salary}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{designation}</h2>
                
                <div className="card-actions justify-end">
                    <button
                        onClick={handleAddToCart}
                        className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
                    >Add to Cart</button>
                </div>
            </div> 
         </div>
    );
};

export default WorkCard;