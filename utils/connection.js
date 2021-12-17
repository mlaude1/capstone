import mongoose, { Model } from "mongoose";

// connection function
export const connect = async () => {
  // create the mongoose connection
  const conn = await mongoose
    .connect(process.env.MONGO_URI)
    .catch((err) => console.log(err))

  // connection alerts
  mongoose.connection
    .on("open", () => console.log("connected to mongo"))
    .on("error", (error) => console.log(error))

  // the Ice Cream Schema
  const IceSchema = new mongoose.Schema({
    flavor: String,
    description: String,
    image: String
  })

  // the Ice Cream Model 
  const Ice = mongoose.models.Ice || mongoose.model("Ice", IceSchema)

  // return the connection and the Ice Cream model
  return { conn, Ice }
}

