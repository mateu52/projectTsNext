// pages/index.tsx
import React from 'react';
import InputForm from '../components/InputForm';

const Home: React.FC = () => {
  return (
    <div className='px-6 pb-4 ml-4 bg-blue-50 w-80'>
      <h1 className="">Input Form</h1>
      <InputForm />
    </div>
  );
};

export default Home;

