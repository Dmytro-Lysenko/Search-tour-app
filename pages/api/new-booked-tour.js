import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://Admin:admin@cluster0.typrr.mongodb.net/booked-tours?retryWrites=true&w=majority"
    );
    const db = client.db();

    const bookedToursCollections = db.collection("booked-tours");

    const result = await bookedToursCollections.insertMany([{ ...data }]);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Booked tour inserted" });
  }
}

export default handler;
