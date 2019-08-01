import dotenv from 'dotenv'
import express from 'express'
import path from 'path'

// initialize configuration
dotenv.config()

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${ port }`)
})
