import React from 'react';

const Works = ({item}) => {
    const {salary, photo, designation} = item;
    return (
        <div className="flex space-x-2">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={photo} alt="" />
            <div>
                <h3 className="uppercase">{designation}----------</h3>
                
            </div>
            <p className="text-yellow-500">${salary}</p>
        </div>
    );
};

export default Works;