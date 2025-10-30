import { MongoClient } from 'mongodb';

// Function to get the database connection
async function getDb() {

    // MongoDB connection URI
const uri = "mongodb+srv://pasanpiyumantha98_db_user:EJHYVA4XOAqtOTNk@cluster0.kzo6buv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

// Connecting to the MongoDB server
await client.connect();
const db = client.db("RankReminder");

return db;

}

export default getDb;