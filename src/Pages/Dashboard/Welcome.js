import React from 'react';

const Welcome = () => {
  return (
    <div className=' text-gray-700 flex flex-col justify-center items-center pb-16'>
      <div className='flex justify-center items-center'>
        <p className='text-6xl font-bold'>Welc</p>
        <div className='w-9 h-9 border-8 border-dashed rounded-full animate-spin mt-3 border-secondary -mb-2'></div>
        <p className='text-6xl font-bold mr-2'>me</p>
        <p className='text-6xl font-bold'>To</p>
      </div>
      <div className='flex justify-center text-gray-500 items-center mt-4'>
        <p className='text-3xl font-medium'>Seller Dashboard</p>
        {/* {!loading && role ? (
          <>
            {role === 'admin' ? (
              <p className='text-3xl font-medium'>Admin Dashboard</p>
            ) : (
              <p className='text-3xl font-medium'>Host Dashboard</p>
            )}
          </>
        ) : (
          <p className='text-3xl font-medium'>User Dashboard</p>
        )} */}
      </div>
    </div>
  );
};

export default Welcome;