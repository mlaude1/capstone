import { getIces, getIce, updateIce, destroyIce } from "../../../utils/actions";

export default async function handler(req, res) {
  try {
    // Get the URL param
    const id = req.query.id;

    // Show Route
    if (req.method === "GET") res.json(await getIce(id));

    // Update Route
    if (req.method === "PUT") res.json(await updateIce(req.body, id))

    // Destroy Route
    if (req.method === "DELETE") res.json(await destroyIce(id))

    // Anything Else
    if(!["GET", "PUT", "DELETE"].includes(req.method))
      res.status(404).send("no response for that method")
  } catch (error) {
    res.status(400).json({ error })
  }
}