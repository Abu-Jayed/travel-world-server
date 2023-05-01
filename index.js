const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
app.use(cors())

const allData = './data/allData.json'

app.get('/', (req, res) => {
  res.send('Traveling the world!')
})

 


app.listen(port, () => {
  console.log(`travel world is running on port ${port}`)
})