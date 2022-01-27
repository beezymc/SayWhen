import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function activity(req, res) {
  try {
    const activity = await prisma.activity.create({
      data: {
        friend_name: req.body['friendName'],
        activity: req.body['activityName'],
        activity_description: req.body['activityDescription'],
        day: req.body['day'],
        to: parseInt(req.body['activity: to']),
        from: parseInt(req.body['activity: from']),
        availability_id: req.body['availabilityId']
      }
    });
    res.status(201).json({ message: 'Success', id: activity.id });
  } catch {
    res.status(400).json({ message: 'Failure', id: null });
  }
  await prisma.$disconnect()
};