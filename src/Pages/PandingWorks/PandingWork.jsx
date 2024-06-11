import { useContext, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseWork from "../../hooks/UseWork";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const PandingWork = () => {
    const [work] = UseWork()
    const {user} =useAuth()
    const navigate =useNavigate()
     const handleAddToCart =(work)=>{
        if(user && user.email){

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
                  navigate('/login')
                }
              });

        }
     }
   
    return (
        <div>
            <SectionTitle
                subHeading={'Pending works'}
                heading={'Pick Works'}>
            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                {work.map((item, index) => (
                    <div key={index} className="card w-96 bg-base-100 shadow-xl">
                        <figure>
                            <img className="lg:w-[300px]" src={item.photo} alt={item.name} />
                        </figure>
                        <div className="card-body">
                            
                            <h2>Salary: ${item.salary}</h2>
                            <p>Designation: {item.designation}</p>
                            <div className="card-actions justify-end">
                                <button  onClick={()=>handleAddToCart(item)}
                                 className="btn btn-primary">Pick Work</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PandingWork;