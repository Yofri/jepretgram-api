import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
mongoose.connect('mongodb://localhost:27017/jepretgram')
mongoose.Promise = global.Promise
const connection = mongoose.connection

export {mongoose, connection}