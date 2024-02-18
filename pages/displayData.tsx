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

    return (
        <div>
        <h1>Display Data</h1>
        <p>{data}</p>
        </div>
    );
};

export default DisplayData;
