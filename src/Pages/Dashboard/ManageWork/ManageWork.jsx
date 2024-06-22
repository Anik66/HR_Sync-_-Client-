import { CiStreamOff } from "react-icons/ci";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";


const ManageWork = () => {
    const [cart,refetch] = useCart()
    console.log(cart)
    return (
        <div>
            <SectionTitle heading="Manage All Works" subHeading="Hurry Up">

            </SectionTitle>

            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Gamil</th>
                                <th>Salary</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item,index) => <tr key={item._id}>
                                    <td>
                                        {index+1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.photo}  alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
    
                                    </td>
                                    <td>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </td>
                                </tr>)
                            }
                            
                           
                            
                          
                        </tbody>
                        {/* foot */}
                       

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageWork;