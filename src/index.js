import  app  from './app.js'
import connectDB from './db.js'

connectDB()
const PORT = 1900


app.listen(PORT)
console.log(`Server on port ${PORT}`, );