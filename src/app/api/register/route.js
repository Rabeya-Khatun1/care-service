"use server"
import bcrypt from 'bcryptjs';
import { collection, dbConnect } from "@/app/lib/dbConnect"

export const postUser = async (payload)=>{
    const userCollection =await dbConnect(collection.USER)
    const isExist = await userCollection.findOne({email:payload.email})
    if(isExist){
        return {
            success:false,
            message:'user already exists'
        }
    }
    const hashpassword =  await bcrypt.hash(payload.password, 14)
    const newUser = {
        ...payload, createdAt:new Date(), role:'user', status:"pending", password:hashpassword
    }
    const result = await userCollection.insertOne(newUser)
   if(result.acknowledged){
   return {
        success: true,
        message: `user created with ${result.insertedId.toString()}`
    }
} else{
    return {
        success: false,
        message: "Something went wrong, try again later"
    }
}
}