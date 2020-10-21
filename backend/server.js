// const express = require('express')
import express from 'express'
import dotenv from 'dotenv'
// const products = require("./data/products.js")
// import products from './data/products.js'
import connectDB from './config/db.js'
import colors from 'colors'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

import productRoute from './routes/productRoute.js'

dotenv.config()

connectDB()

const app = express()



app.get('/', (req, res) => {

    res.send('API is running..')
})


app.use('/api/products', productRoute)

app.use(notFound)

app.use(errorHandler )


const PORT = process.env.PORT || 5000


app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.yellow.bold))