// const showSongs = require('../templates/song-listing.handlebars')
// const showUpdatedSong = require('../templates/update-song.handlebars')

const createArtistSuccess = function (data) {
  $('#message').text('new artist made')
}

const createArtistFailiure = function (data) {
  $('#message').text('failed')
}

const showArtistsSuccess = function (data) {
  (data)
  $('#message').text('success')
}
const showArtistsFailiure = function (data) {
  $('#message').text('failiure')
}

module.exports = {
  createArtistFailiure,
  createArtistSuccess,
  showArtistsSuccess,
  showArtistsFailiure
}
