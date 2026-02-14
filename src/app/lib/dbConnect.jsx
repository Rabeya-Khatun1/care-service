const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGO_URI;

export const collection =  {
  USER:'users',
  SERVICE:'service',
  BOOKING:'booking'
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
const dbname = process.env.DB_NAME

export const dbConnect = async (cname)=>{
  return client.db(dbname).collection(cname)
}