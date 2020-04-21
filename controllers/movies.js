

const movies = require('../movies')

const allMovies = (request, response) => {
  return response.send(movies)
}
const idCheck = (request, response) => {
  const { id } = request.params
  const matchingTitles = movies.filter((movie) => movie.title.toLowerCase().includes(id.toLowerCase()))

  if (matchingTitles.length === 0) {
    const matchedDirs = movies.filter((movie) => (movie.directors.join('').toLowerCase())
      .includes([id.toLowerCase()]))

    return response.send(matchedDirs)
  }

  return response.send(matchingTitles)
}


const saveNewMovie = (request, response) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return response
      .status(400)
      .send('The following fields are require: title, directors, releaseDate, rating, runTime, genres')
  }
  const newMovie = {
    title, directors, releaseDate, runTime, rating, genres
  }

  movies.push(newMovie)

  return response.status(201).send(newMovie)
}

module.exports = {
  allMovies, idCheck, saveNewMovie
}
