import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const decks = await prisma.deck.findMany();
    res.status(200).json(decks);
  } else if (req.method === 'POST') {
    const { title } = req.body;
    const deck = await prisma.deck.create({ data: { title, ownerLogin: req.headers['x-github-login'] } });
    res.status(201).json(deck);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}