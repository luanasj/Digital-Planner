const express = require('express')
const dotenv = require('dotenv')
const notFound = require('./src/middlewares/notFound.js')
const handleError = require('./src/middlewares/handleError.js')
const dbRoutes = require('./src/resources/contents/content.routes.js')
const cors = require('cors')
dotenv.config()

const app = express()
port = process.env.PORT || 3000;

const corsOptions = {
    origin: "http://127.0.0.1:5500/",
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json())

app.use("/content", dbRoutes);

app.use(notFound)
app.use(handleError)

app.listen(port, ()=>{
    console.log(`server running on ${port}`)
})