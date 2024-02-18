// pages/api/getData.ts
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // Here you can read the data from the file
        // For simplicity, let's read from a JSON file
        const data = fs.readFileSync('public/data.json', 'utf-8');
        const jsonData = JSON.parse(data);

        res.status(200).json({ data: jsonData.data });
    } else {
        res.status(405).end();
    }
}
