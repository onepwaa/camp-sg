import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let teams = await prisma.team.findMany();
  res.status(200).json(teams);
};
