const express = require('express')
const router = require('./router/index')
const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const port = 8080

app.use('/api', router)

app.get('/', (req, res) => {
  res.send('Back-end is working!')
})

app.listen(port, () => {
  console.log('Server running at http://localhost:' + port)
})
