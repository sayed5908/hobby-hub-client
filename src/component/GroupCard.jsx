import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';

const GroupCard = ({group}) => {
    // const {user} = use(AuthContext);

    const  {name, _id, category, description, url} = group;
    // console.log(group.name);
    return (
        <div  className="card bg-base-100 w-90 shadow-sm mt-5 hover:bg-gray-200 hover:shadow-2xl hover:shadow-gray-200 hover:scale-101 transition-all duration-300 ease-in-out">
  <figure>
    <img className='w-full h-60'
      src={url}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">({category})</div>
    </h2>
    <p>{description}</p>
   
  </div>

</div>
    );
};

export default GroupCard;