import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function activity(req, res) {
  const { uid } = req.query;
  try {
    const activities = await prisma.activity.findMany({
      where: {
        availability_id: uid
      }
    });
    res.status(200).json({ activities });
  } catch {
    res.status(404).json({ message: 'Failure to Retrieve Activities' });
  }
  await prisma.$disconnect()
};