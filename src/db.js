import mongoose from "mongoose";

const uri = 'mongodb+srv://StivenDev:Stiven17*@cluster1.jgbg0ka.mongodb.net/inventario?retryWrites=true&w=majority'

const connectDB = async () => {
  try {
    await mongoose.connect(uri)
  } catch (error) {
    console.log(error)
  }
}

export default connectDB;