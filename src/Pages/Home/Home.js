import React from 'react';
import Banner from './Banner';
import Categories from './Categories/Categories';
import FeatureMust from './FeatureMust/FeatureMust';
import Hero from './Hero/Hero';
import Statics from './Statics/Statics';

const Home = () => {
  return (
    <div className='mx-5'>
      <Banner />
      <Hero />
      <Categories />
      <FeatureMust />
      <Statics />
    </div>
  );
};

export default Home;