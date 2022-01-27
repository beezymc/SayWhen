import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function availability(req, res) {
  const { uid } = req.query;
  try {
    const availability = await prisma.availability.findUnique({
      where: {
        id: uid
      }
    });
    res.status(200).json({ availability });
  } catch {
    res.status(404).json({ message: 'Failure to Retrieve Availability' });
  }
  await prisma.$disconnect()
};