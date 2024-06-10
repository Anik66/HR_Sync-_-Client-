import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";


import "swiper/css";
import "swiper/css/pagination";


import slide1 from '../../../assets/oil.jpg';
import slide2 from '../../../assets/full.jpg';
import slide3 from '../../../assets/battery.jpeg';
import slide4 from '../../../assets/coolent.jpg';
import slide5 from '../../../assets/full bike.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Service = () => {
    return (
        <section>
            <SectionTitle
            subHeading={"From 11.00am to 10.00pm"}
            heading={"Our Services"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Oil Change</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Full Service</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Battery Change</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Coolent </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Full Bike Service</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Service;