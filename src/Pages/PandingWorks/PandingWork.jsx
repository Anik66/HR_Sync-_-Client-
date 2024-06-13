
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import 'react-tabs/style/react-tabs.css';
import UseWork from "../../hooks/UseWork";

import WorkCard from "../../components/WorkCard/WorkCard";



const PandingWork = () => {
    
    const [work] = UseWork()
 


    
   
    return (
        <div>
            <SectionTitle
                subHeading={'Pending works'}
                heading={'Pick Works'}>
            </SectionTitle>

            <div className="grid md:grid-cols-3 gap-6 mb-4">
            {
                    work.map(item => <WorkCard
                        key={item._id}
                        item={item}
                    ></WorkCard>)
                }
            </div>

            

        </div>
    );
};

export default PandingWork;