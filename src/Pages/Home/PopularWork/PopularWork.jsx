import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Works from "../../../components/Works/Works";
import UseWork from "../../../hooks/UseWork";


const PopularWork = () => {
    const [work] = UseWork()
    const [pop,setPop] =useState([])
   useEffect(()=>{
    setPop(work.filter(item => item.category === 'popular'))
   },[work])
    return (
        <div>
            <SectionTitle heading={"from our popular work"}
            subHeading={"popular works"}>
                
            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-10">
            {
                    pop.map(item => <Works
                        key={item._id}
                        item={item}
                    ></Works>)
                }
            </div>
        </div>
    );
};

export default PopularWork;
