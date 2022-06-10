const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI) //Connect to MongoDB cluster using mongoose

        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
    }
    catch (error) {
        console.log(error);
        process.exit()
    }
}

module.exports = connectDB