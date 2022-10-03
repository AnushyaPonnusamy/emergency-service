import express from 'express'
import connectDB from "./db/connectdb.js";
import service from "./routes/service.js";

const app = express()
const port = process.env.PORT || '8000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://0.0.0.0:27017/";

// Database Connection
connectDB(DATABASE_URL);


// JSON
app.use(express.json())
app.use(cors());

// Load Routes
app.use("/api", service)


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
 })