'use strict'
const showSongs = require('../templates/song-listing.handlebars')

const showSongsSuccess = function (data) {
  $('#message').text('All songs:')
  $('.content').empty()

  // Show songs using handlebars
  const showSongsHtml = showSongs({ songs: data.songs })
  $('.content').append(showSongsHtml)
}

const showSongsFailiure = function (data) {
  $('#message').text('failiure')
}

module.exports = {
  showSongsSuccess,
  showSongsFailiure
  // songData
}
