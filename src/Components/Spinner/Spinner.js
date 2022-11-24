import React from 'react';
import { Circles } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <div className='min-h-screen flex justify-center mt-10'>
      <Circles
        height="80"
        width="80"
        color="#00a1f1"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;