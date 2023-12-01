import express from 'express'

const app = express()

app.get('/users', (req, res) => {
  console.log('Users')

  res.json(['Saa', 'dsad', 'Karli'])
})

app.listen(3000)
