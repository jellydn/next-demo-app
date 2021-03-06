import type { NextApiRequest, NextApiResponse } from "next";

/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns hello world
 *     responses:
 *       200:
 *         description: hello world
 */
const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: "hello world" });
};

export default handler;
