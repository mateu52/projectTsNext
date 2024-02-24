// components/InputForm.tsx
import React, { useState } from 'react';

interface InputFormProps {
  setDisplayName: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputForm: React.FC<InputFormProps> = ({setDisplayName}) => {
  const [inputData, setInputData] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch('/api/saveData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: inputData }),
      });

      // Clear input after submission
      setInputData('');
      setDisplayName(true);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputData} onChange={handleInputChange} />
      <button type="submit">Ok</button>
    </form>
  );
};

export default InputForm;
