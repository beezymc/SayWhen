import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function availability(req, res) {
  const { username, timezone, monday, tuesday, wednesday, thursday, friday, saturday, sunday } = req.body;
  try {
    const availability = await prisma.availability.create({
      data: {
        username: username,
        timezone: timezone,
        monday: monday || '',
        tuesday: tuesday || '',
        wednesday: wednesday || '',
        thursday: thursday || '',
        friday: friday || '',
        saturday: saturday || '',
        sunday: sunday || ''
      }
    });
    res.status(201).json({ message: 'Success', id: availability.id });
  } catch {
    res.status(400).json({ message: 'Failure', id: null });
  }
}
