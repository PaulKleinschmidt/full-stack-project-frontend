const config = require('../config')
const store = require('../store')

const createSong = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/songs/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showSongs = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/songs/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteSong = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/songs/' + store.song.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createSong,
  showSongs,
  deleteSong
}
