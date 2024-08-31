import type { NextApiRequest, NextApiResponse } from 'next';

const mockData = [
  { name: 'Colombian Roast', roastLevel: 'Medium', pricePerUnit: 15.00, image: '/default-product.jpg' },
  { name: 'Brazilian Blend', roastLevel: 'Dark', pricePerUnit: 18.00, image: '/default-product.jpg' }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    res.status(200).json(mockData);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
