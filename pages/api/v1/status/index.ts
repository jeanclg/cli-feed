import { NextApiRequest, NextApiResponse } from "next/types";
import prisma from "lib/prisma";

type TResponse = {
  updated_at: Date;
  dependencies: {
    database: {
      version: string;
      max_connections: number;
      opened_connections: number;
    };
  };
};

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  let result: TResponse;

  const databaseVersion = await prisma.$queryRaw`SHOW server_version;`;
  const databaseMaxConnections =
    await prisma.$queryRaw`SELECT current_setting('max_connections')::int AS max_connections;`;
  const databaseOpenedConnections =
    await prisma.$queryRaw`SELECT COUNT(*)::int FROM pg_stat_activity WHERE state = 'active';`;

  result = {
    updated_at: new Date(),
    dependencies: {
      database: {
        version: databaseVersion[0].server_version,
        max_connections: databaseMaxConnections[0].max_connections,
        opened_connections: databaseOpenedConnections[0].count,
      },
    },
  };

  res.status(200).json(result);
};
