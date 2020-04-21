const express = require('express')
const bodyParser = require('body-parser')
const { allMovies, idCheck, saveNewMovie } = require('./controllers/movies')
const app = express()

app.get('/movies', allMovies)

app.get('/movies/:id', idCheck)


app.post('/', bodyParser.json(), saveNewMovie)

app.get('*', (request, response) => {
  return response.status(404).send('This isn\'t THE END but it is a dead end.....')
})

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('Listenig on port 1337')
})
