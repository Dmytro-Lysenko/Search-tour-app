// "api/new-tour"
import { MongoClient } from "mongodb";


async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://Admin:admin@cluster0.typrr.mongodb.net/tours?retryWrites=true&w=majority"
    );
    const db = client.db();

    const toursCollections = db.collection("tours");

    const result = await toursCollections.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Tour inserted" });
  }
}

export default handler;
