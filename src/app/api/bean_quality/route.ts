import { NextApiRequest, NextApiResponse } from 'next';

type BeanQualityData = {
  bean_type_id: string;
  altitude: number;
  weather_temperature: number;
  weather_rainfall: number;
  humidity: number;
  soil_ph: number;
  soil_texture: string;
  plant_age: number;
  disease: string;
  id: string;
};

const beanQualityDB: BeanQualityData[] = []; // Mock database

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data: BeanQualityData = req.body;

    if (!data.bean_type_id || !data.id) {
      return res.status(422).json({ error: 'Bean Type ID and ID are required.' });
    }

    beanQualityDB.push(data);
    return res.status(201).json({ message: 'Data submitted successfully', data });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
