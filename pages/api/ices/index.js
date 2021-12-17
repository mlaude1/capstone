import { getIces, createIce } from "../../../utils/actions";

export default async function handler(req, res) {
  try {
    // Index Route
    if (req.method === "GET") res.json(await getIces())

    // Create Route
    if(req.method === "POST")
      res.json(
        (await createIce(req.body))
        ? await getIces()
        : { error: "something happened"}
      )

    // Anything Else
    if (!["GET", "POST"].includes(req.method))
     res.status(404).send("no response for that method")
  } catch (error) {
    res.status(400).json({ error })
  }
}