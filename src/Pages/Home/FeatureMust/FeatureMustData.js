import React from 'react';

const FeatureMustData = ({ service }) => {
  const { description, icon } = service;
  return (
    <div className="card w-full md:w-60 lg:max-w-lg bg-base-100 shadow">
      <figure className="px-10 pt-8">
        <img src={icon} className='h-12 w-full' alt="" />
      </figure>
      <div className="card-body items-center text-center">
        <p className='font-semibold text-gray-900'>{description}</p>
      </div>
    </div>
  );
};

export default FeatureMustData;