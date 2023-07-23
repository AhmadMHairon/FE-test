import type { NextApiRequest, NextApiResponse } from 'next';
import { itemsGroup } from '@/constants/food';




interface Item {
  image: string;
  title: string;
  type: string;
  id: number;
}

type Data = {
  [type: string]: Item[];
};


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
      if (req.method === 'GET') {
    // Return the list of food items as JSON
    res.status(200).json(itemsGroup);
  } else {
    // Handle other types of requests (e.g., POST, PUT, DELETE) if needed
    res.status(405).end(); // Method Not Allowed
  }
}

