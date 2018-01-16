import express from 'express'
import graphqlHTTP from 'express-graphql'
import {mongoose, connection} from './config'
import schema from './controllers'
import cors from 'cors'
import morgan from 'morgan'

const app = express()
const port = process.env.PORT

app.use(cors())
app.use('/jepretgram', morgan('dev'), graphqlHTTP({
  schema,
  pretty: true,
  graphiql: true
}))

connection.on('error', () => console.log('Error connecting to database'))
connection.once('open', () => console.log('Connected to database'))
app.listen(port, () => console.log(`Express listening on port ${port}`))