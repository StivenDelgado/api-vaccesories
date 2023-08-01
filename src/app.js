import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser'
import cors from 'cors'

import  authRouter  from './routes/auth.routes.js';
import ProductsRouter from './routes/products.routes.js'

const whiteList = ['http://localhost:3000', 'http://localhost:3001']

const app = express();
app.use(cors({
    origin: whiteList
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())


app.use('/api', authRouter)
app.use('/api', ProductsRouter)

export default app;
