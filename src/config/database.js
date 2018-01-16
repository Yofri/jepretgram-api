import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
mongoose.connect(process.env.DB_URI)
mongoose.Promise = global.Promise
const connection = mongoose.connection

export {mongoose, connection}