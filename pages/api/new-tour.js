import { MongoClient } from "mongodb";

// "api/new-tour"

async function handler(reg, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, country, date, price, photo, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://Admin:admin@cluster0.typrr.mongodb.net/tour-app?retryWrites=true&w=majority"
    );
    const db = client.db();

    const toursCollections = db.collection("tours");

    toursCollections.insertOne
  }
}

export default handler;
