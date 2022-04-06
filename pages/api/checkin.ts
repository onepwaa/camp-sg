import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let team = await prisma.team.update({
    data: { Present: req.query.in == 'true' ? true : false },
    where: { id: req.query.team.toString() },
  });
  res.status(200).json(team);
};
