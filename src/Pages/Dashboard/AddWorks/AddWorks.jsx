import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaCarOn } from "react-icons/fa6";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";




const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const AddWorks = () => {
    const { register, handleSubmit, reset } = useForm();
    //const axiosPublic =useAxiosPublic()
    const axiosSecure =useAxiosSecure()
    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.photo[0] }
        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            const menuItem = {
                email: data.email,
                Salary:parseFloat(data.Salary),
                designation: data.designation,
                photo:res.data.data.display_url

            }
            const menuRes = await axiosSecure.post('/menu',menuItem)
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            
        }
        console.log( 'with image url', res.data);
    }

    return (
        <div>
            <SectionTitle heading="Add Work" subHeading="what's new work">

            </SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>


                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">WorkerGmail?</span>

                        </div>
                        <input {...register("email", { required: true })} type="text" placeholder="Worker Gmail" className="input input-bordered w-full " />

                    </label>






                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select {...register("designation", { required: true })} className="select select-bordered w-full ">
                                <option disabled selected>Select any Work</option>
                                <option value="Body painter">Body painter</option>
                                <option value="Engine specialist">Engine specialist</option>
                                <option value="Car washer">Car washer</option>
                                <option value="light specialist">light specialist</option>
                                <option value="wheel specialist">wheel specialist</option>
                                <option value="Brake specialist">Brake specialist</option>
                                <option value="Full Bike Service">Full Bike Service</option>

                            </select>

                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Salary*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Salary"
                                {...register('Salary', { required: true })}
                                className="input input-bordered w-full" />
                        </div>



                    </div>
                    <div className="form-control w-full my-6">
                        <input {...register('photo', { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>


                    <button className="btn">
                        Add Work <FaCarOn className="ml-4 text-3xl" />
                    </button>
                </form>
            </div>
        </div>

    );
};

export default AddWorks;