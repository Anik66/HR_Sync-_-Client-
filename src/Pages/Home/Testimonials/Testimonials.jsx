import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import '@smastrom/react-rating/style.css'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';

const Testimonials = () => {

    const [reviews, setReview] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))

    }, [])
    return (
        <div className='my-20'>
            <SectionTitle
                subHeading={"what our clients say"}
                heading={"Testimonials"}
            />

            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id} >

                        <div className=' m-24'>

                           <div className='flex flex-col justify-center text-center'>
                           <Rating 
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                           </div>
                            <p>{review.details}</p>
                            <h3 className="text-2xl text-center text-orange-500">{review.name}</h3>
                        </div>


                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Testimonials;
