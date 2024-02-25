// pages/index.tsx
import React, { useState} from 'react';
import InputForm from '../components/InputForm';
import DisplayData from './displayData';

const Home: React.FC = () => {
  const [ displayName, setDisplayName] = useState(false);
  return (
    <div className='px-6 pb-4 ml-4 bg-blue-50 w-1/2 min-h-screen'>
      <h1 className="">Witaj! Podaj imię:</h1>
      <InputForm  setDisplayName ={setDisplayName} />
      {displayName ? <DisplayData /> : null}
    </div>
  );
};

export default Home;

