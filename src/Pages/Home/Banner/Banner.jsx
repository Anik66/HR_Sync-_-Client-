import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../../src/assets/img8.jpg'
import img2 from '../../../../src/assets/img9.jpeg'
import img3 from '../../../../src/assets/img1.jpg'
import img4 from '../../../../src/assets/img14.jpg'

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} />

            

                
              
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>

        </Carousel>
    );
};

export default Banner;
