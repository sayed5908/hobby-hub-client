import React from 'react';

const GCard = ({group}) => {
  const  {name, category, description, location, members, url} = group;
    return (
        <div className="card bg-base-100 w-90 shadow-sm">
  <figure>
    <img
      src={url}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">({members})</div>
      <p className='text-sm font-extralight'>{category}</p>
    </h2>
    <p>{description}</p>
    <p>Location: {location}</p>
    <div className="card-actions justify-end">
      <button className=" btn btn-soft btn-primary px-8">Join</button>
    </div>
  </div>
</div>
    );
};

export default GCard;