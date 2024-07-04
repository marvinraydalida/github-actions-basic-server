import express from "express";
import dotenv from "dotenv";
dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send(`HELLO WORLD! at port ${process.env.PORT}`)
})

app.get('/check/:number', (req, res) => {
    const { number } = req.params
    let value = ''
    if(number % 2 == 0) {
        value = process.env.IS_EVEN
    }
    else {
        value = process.env.IS_ODD
    }

    res.send(`The value is ${value}`)
})

app.listen(PORT, () => {
    console.log(PORT)
})