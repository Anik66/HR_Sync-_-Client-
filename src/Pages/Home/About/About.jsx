import React from 'react';
import img1 from '../../../assets/2672335.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const About = () => {
    return (
        <div className='items-center'>

            <SectionTitle  
            subHeading={"Our Identity"}
            heading={"About Us"}>

            </SectionTitle>
             <div className='lg:flex justify-center'>
            
            <div className='lg:text-3xl items-center text-center flex flex-col justify-center '>
            At Car Service Point, we deliver top-quality auto maintenance and repair services with expert technicians, ensuring your vehicle's optimal performance and safety. Your satisfaction and convenience are our priority.
            </div>

            <div>
                <img src={img1} alt="" />
            </div>
        </div>

        </div>


    );
};

export default About;