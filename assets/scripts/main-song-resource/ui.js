'use strict'
const showSongs = require('../templates/song-listing.handlebars')
const store = require('../store')
const events = require('./events')

// const searchSongsSuccess = function (data) {
//   console.log(data)
//   const songData = data.songs
//   console.log('DATA BOIII', songData)
//   console.log('here is waht I searched', events.searchData)
// }

const showSongsSuccess = function (data) {
  $('#message').text('success')
  $('.content').empty()
  console.log(data)

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
