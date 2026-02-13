

export const getAllService = async (req, res) => {
   const result = await dbConnect(collection.SERVICE).find({}).toArray()
   return result || [];

}
