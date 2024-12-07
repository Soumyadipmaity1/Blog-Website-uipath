import React from 'react';
import SampleComponent from '../components/sampleComponent';


const HomePage = () => {
  return (
    <div className="bg-black text-white w-full h-screen flex justify-center items-center">
      <p className='text-white font-bold text-center text-4xl'>
        This is a Blog website Home page
        <SampleComponent/>

      </p>
    </div>
  );
};

export default HomePage;
