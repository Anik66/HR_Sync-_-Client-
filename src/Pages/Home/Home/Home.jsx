import Works from "../../../components/Works/Works";
import About from "../About/About";
import Banner from "../Banner/Banner";
import PopularWork from "../PopularWork/PopularWork";
import Service from "../Service/Service";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
             <PopularWork></PopularWork>
            <About></About>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;