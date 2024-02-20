// pages/index.tsx
import React from 'react';
import InputForm from '../components/InputForm';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Input Form</h1>
      <InputForm />
    </div>
  );
};

export default Home;

