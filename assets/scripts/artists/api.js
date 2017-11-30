
const config = require('../config')
const store = require('../store')

const createArtist = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/artists/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showArtists = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/artists/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createArtist,
  showArtists
}
