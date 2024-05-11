import React from 'react';
import HeroContainer from './Hero/HeroContainer';
import Gallary from './Gallary/Gallary';
import PopularClasses from './PopularClasses/PopularClasses';

const Home = () => {
  return (
    <Selection>
      <HeroContainer/>
      <div className='max-w-screen-xl mx-auto'>
        <Gallary/>
        <PopularClasses/>
      </div>
    </Selection>
  )
}

export default Home
