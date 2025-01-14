import { NextApiRequest, NextApiResponse } from "next/types";
import prisma from "../../../../lib/prisma";

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const prismaTest = await prisma.$queryRaw<{
    sum: number;
  }>`SELECT 1+1 as sum;`;

  console.log("RESULTADO: ", prismaTest[0]);

  res.status(200).json({ status: "OK" });
};
