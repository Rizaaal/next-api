// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>,
  ) {
  fetch(`https://next-api-endopoint-production.up.railway.app/api/products`)
  .then(response => response.json())
  .then(data => {res.status(200).json(data)})
};
