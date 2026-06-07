import React from 'react';
import { useLoaderData } from 'react-router';
import GCard from './GCard';

const Groups = () => {
    const groups = useLoaderData();
    // console.log(groups);

    return (
        <div>
            <h1 className='text-center font-semibold text-3xl '>All Groups</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 justify-center'>
                {
                    groups.map(group => <GCard group={group} key={group._id}></GCard>)
                }
            </div>
        </div>
    );
};

export default Groups;