import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import path from 'path'

import postsRoute from './routes/posts'

dotenv.config()
const port = process.env.SERVER_PORT

const app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/posts', postsRoute)

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// tslint:disable-next-line: no-floating-promises
mongoose.connect(process.env.MDB || 'sorry', { useNewUrlParser: true }, () => {
  // tslint:disable-next-line:no-console
  console.log('Connected to DB')
})

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${ port }`)
})
