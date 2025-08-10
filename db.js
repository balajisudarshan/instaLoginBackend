const mongoose = require('mongoose')

require('dotenv').config()

const connectToMongo = async()=>{
    await mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Connected to MongoDb")
    }).catch((err)=>{
        console.error("Error connecting to MongoDB:", err);
    })
}
module.exports = connectToMongo