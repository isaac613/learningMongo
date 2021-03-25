const { MongoClient } = require("mongodb");

const URI =
  "mongodb+srv://isaac613:<password>@cluster0.qc9as.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connection = async () => {
  try {
    const client = new MongoClient(URI, { useUnifiedTopology: true });
    await client.connect();
    console.log("success");

    const db = client.db("cactusdb");
    const collection = db.collection("emails");
    collection.insertOne({ email: "example@gmail.com" });
    client.close();
  } catch (error) {
    console.log(error);
  }
};
