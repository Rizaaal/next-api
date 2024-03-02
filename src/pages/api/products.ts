import type { NextApiRequest, NextApiResponse } from "next";

export async function getData(){
  const response = await fetch(`https://next-api-endopoint-production.up.railway.app/api/products`);
  const data = await response.json();
  return data;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>,
  ) {
  // getData()
  // .then(data => {res.status(200).send(data)})
  fetch(`https://next-api-endopoint-production.up.railway.app/api/products`)
  .then(response => response.json())
  .then(data => res.status(200).send(data));
};
