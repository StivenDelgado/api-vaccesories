import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser'

import  authRouter  from './routes/auth.routes.js';
import ProductsRouter from './routes/products.routes.js'

const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())


app.use('/api', authRouter)
app.use('/api', ProductsRouter)

export default app;