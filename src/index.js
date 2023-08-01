import  app  from './app.js'
import connectDB from './db.js'
import cors from 'cors'


connectDB()
const PORT = 1900

const whiteList = ['http://localhost:3000', 'http://localhost:3001']

app.use(cors({
    origin: whiteList
}))
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})
