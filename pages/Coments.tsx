import fs from 'fs';
import path from 'path';

// Komponent strony, który odbiera dane jako props
export default function DataList({ data }) {
    return (
        <div className='bg-blue-50'>
        <h1 className='text-2xl pt-4 ml-6'>List of comments:</h1>
        <ul className='px-8 py-2'>
            {data.map((item, index) => (
            <li key={index} className='py-1'>
                {item.author} - {item.title}
            </li>
            ))}
        </ul>
        </div>
    );
}

// Funkcja getStaticProps do odczytu danych z pliku JSON
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data', 'formData.json');
    let data = [];

    try {
        const jsonData = fs.readFileSync(filePath, 'utf8');
        data = JSON.parse(jsonData);
    } catch (error) {
        console.error("Could not read the file", error);
    }

    // Przekazanie odczytanych danych do komponentu jako props
    return {
        props: {
        data,
        },
    };
}
