import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config();

const connectDB = async () => {
    await mongoose.connect(process.env.uri)
        .then(() => {
        console.log('connected to database.')
    })
}

export default connectDB;