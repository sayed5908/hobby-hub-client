import React from 'react';
import { Link } from 'react-router';

const GCard = ({group}) => {
  const  {name, _id, category, description, url} = group;
    return (
        <Link to={`/groupDetails/${_id}`} className="card bg-base-100 w-90 shadow-sm hover:bg-gray-200 hover:shadow-2xl hover:shadow-gray-200 hover:scale-101 transition-all duration-300 ease-in-out">
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
</Link>
    );
};

export default GCard;