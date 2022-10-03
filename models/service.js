import mongoose from "mongoose";

// Defining Schema
const serviceSchema = new mongoose.Schema({
  text1:{type:String, required:true},
  text2:{type:String, required:true},
  text3:{type:String, required:true},
  text4:{type:String, required:true},
  
})

// Model 
const ServiceModel = mongoose.model("service", serviceSchema)

export default ServiceModel