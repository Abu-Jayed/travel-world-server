const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
app.use(cors())

/* code for destination start here */
  const allDestination = require('./data/allDestination.json')

  app.get('/allDestination', (req,res) =>{
    res.send(allDestination)
  })

/* code for destination end here */



app.get('/', (req, res) => {
  res.send('Traveling the world!')
})

 


app.listen(port, () => {
  console.log(`travel world is running on port ${port}`)
})