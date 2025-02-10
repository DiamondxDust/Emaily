import express from 'express'

const app = express();
const port = process.env.port || 5000;

app.get("/", (req, res) => {
    res.send({hi: "There"});
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})