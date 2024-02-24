import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
        if (req.method === 'POST') {
        // Ścieżka do pliku JSON, gdzie zapisywane są dane
        const filePath = path.join(process.cwd(), 'data', 'formData.json');
        const data = req.body;
    
        // Wczytanie istniejących danych z pliku
        const fileExists = fs.existsSync(filePath);
        let fileData = [];
        if (fileExists) {
            const jsonData = fs.readFileSync(filePath, 'utf8');
            fileData = jsonData ? JSON.parse(jsonData) : [];
        }
    
        // Dodanie nowych danych do istniejących
        fileData.push(data);
    
        // Zapisanie zmodyfikowanych danych z powrotem do pliku
        fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2), 'utf8');
    
        res.status(200).json({ message: 'Dane zostały zapisane' });
        } else {
        // Obsługa innych metod niż POST
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    }


// wersja pierwotna z nadpisywaniem pliku:
// export default function handler(req, res) {
//     if (req.method === 'POST') {
//         const data = req.body;
//         const filePath = path.join(process.cwd(), 'data', 'formData.json');
//         const fileData = JSON.stringify(data);

//         fs.writeFileSync(filePath, fileData, 'utf8');

//         res.status(200).json({ message: 'Dane zostały zapisane' });
//     } else {
//         // Obsługa innych metod niż POST
//         res.setHeader('Allow', ['POST']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }