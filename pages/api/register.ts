import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let team = await prisma.team.create({
    data: {
      Name: req.query["team-name"].toString(),
      Present: false,
    },
  });
  let participants = await prisma.participant.createMany({
    data: [
      {
        Name: req.query["name-1"].toString(),
        Email: req.query["email-1"].toString(),
        teamId: team.id,
      },
      {
        Name: req.query["name-2"].toString(),
        Email: req.query["email-2"].toString(),
        teamId: team.id,
      },
      {
        Name: req.query["name-2"].toString(),
        Email: req.query["email-2"].toString(),
        teamId: team.id,
      },
    ],
  });
  team = await prisma.team.findFirst({
    where: { id: team.id },
    include: { Participants: true },
  });
  console.log(team)
  res.status(200).json({ name: "John Doe" });
};
