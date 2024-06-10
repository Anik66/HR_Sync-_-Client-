import { FaLocationArrow, FaMobile } from "react-icons/fa";

import img1 from "../../../src/assets/undraw_Contact_us_re_4qqt.png"
import { MdEmail } from "react-icons/md";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const OurServices = () => {
  return (
    <div>

      <SectionTitle
        subHeading={"24 Hours active For Your Service"}
        heading={"Contact us"}
      />
      <div className=" lg:flex mt-14 ">
        <div className=" items-center space-y-5  ">
          <div className="flex justify-center items-center  ">
            <FaMobile className="text-3xl" />
            <p className="text-3xl">+88017077-24711</p>
          </div>
          <div className="flex justify-center items-center  ">
            <MdEmail className="text-3xl" />
            <p className="text-3xl">HrSync123@gmail.com</p>
          </div>
          <div className="flex justify-center items-center  ">
            <FaLocationArrow className="text-3xl" />
            <p className="text-3xl">Dhaka,Banani,AR Tower</p>
          </div>
        </div>


        <div>
          <img src={img1} alt="" />
        </div>


      </div>

      <SectionTitle
        subHeading={"Do you have any Question?"}
        heading={"Let us Know Your Question"}
      />
      <div className="flex flex-col justify-center items-center mb-10">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-bold">First Name</span>

          </div>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-bold">Last Name</span>

          </div>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-bold">Email</span>

          </div>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-bold">Phone Number</span>

          </div>
          <input type="text" placeholder="Type your  Number" className="input input-bordered w-full max-w-xs" />

        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-bold">Write Your Question?</span>

          </div>

          <textarea id="w3review" className="input-bordered " placeholder="Type here your  question" name="w3review" rows="4" cols="50"></textarea>

        </label>

        <div className="flex justify-end mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;