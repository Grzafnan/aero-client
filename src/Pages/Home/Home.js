import React from 'react';
import Banner from './Banner';
import FeatureMust from './FeatureMust/FeatureMust';
import Hero from './Hero/Hero';
import Statics from './Statics/Statics';

const Home = () => {
  return (
    <div className='mx-5'>
      <Banner />
      <Hero />
      <FeatureMust />
      <Statics />
    </div>
  );
};

export default Home;