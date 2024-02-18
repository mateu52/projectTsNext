// pages/api/saveData.ts
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { data } = req.body;
    fs.writeFileSync('public/data.json', JSON.stringify({ data }));
    // Here you can save the data to a file
    // For simplicity, let's just console log it
    console.log('Data received:', data);

    res.status(200).end();
  } else {
    res.status(405).end();
  }
}
