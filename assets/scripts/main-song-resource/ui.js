'use strict'
const showSongs = require('../templates/song-listing.handlebars')

const showSongsSuccess = function (data) {
  console.log(data)
  $('#message').text('success')
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
}
