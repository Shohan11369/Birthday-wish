import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // .env ফাইলে তোমার কি থাকবে
let client = new MongoClient(uri);

export async function getDb() {
  if (!client.topology || !client.topology.isConnected()) await client.connect();
  return client.db("birthday_db");
}