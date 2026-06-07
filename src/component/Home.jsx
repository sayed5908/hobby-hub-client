import React, { use } from 'react';
import Banner from './Banner';
import { useLoaderData, Link } from 'react-router';
import GCard from './GCard';
import HobbyCategories from './HobbyCategories';
import WhyJoin from './WhyJoin';
import { AuthContext } from '../Context/AuthProvider';

const Home = () => {
    const groups = useLoaderData();

    const {user} = use(AuthContext)

    return (
        <div>
            <div>
            <Banner />

            <h1 className='text-3xl font-semibold text-center my-5'>
                Featured Groups
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                {groups.slice(0, 6).map(group => (
                    <GCard
                        key={group._id}
                        group={group}
                    />
                ))}
            </div>

            
        </div>
        <HobbyCategories></HobbyCategories>
        <WhyJoin></WhyJoin>
        </div>
        
    );
};

export default Home;