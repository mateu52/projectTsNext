// pages/displayData.tsx
import React, { useEffect, useState } from 'react';

const DisplayData: React.FC = () => {
    const [data, setData] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('/api/getData');
            const jsonData = await response.json();
            setData(jsonData.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, []);
    console.log(data);
    return (
        <div className='bg-red-100 rounded ml-4 mt-5 w-1/3'>
        <h1 className='bg-indigo-100 rounded'>Witaj</h1>
        <p className='bg-indigo-300 font-semibold tracking-wide'>{data}</p>
        </div>
    );
};

export default DisplayData;
