import About from "../About/About";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <About></About>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;