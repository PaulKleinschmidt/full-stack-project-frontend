'use strict'

const showSongs = require('../templates/song-listing.handlebars')
const showUpdatedSong = require('../templates/update-song.handlebars')

const createSongSuccess = function (data) {
  $('#message').text('new song made')
}

const createSongFailiure = function (data) {
  $('#message').text('failed')
}

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
const deleteSongSuccess = function (data) {
  console.log(data)
  $('#message').text('successfully deleted song')
}
const deleteSongFailiure = function (data) {
  $('#message').text('You do not have permission to delete this song')
}
const updateSongSuccess = function (data) {
  $('#message').text('successfully updated song')
  $('.content').empty()

  // Show updated song using handlebars
  const showUpdatedSongHtml = showUpdatedSong({ songs: data })
  $('.content').append(showUpdatedSongHtml)
}
const updateSongFailiure = function (data) {
  $('#message').text('You do not have permission to update this song')
}

module.exports = {
  createSongFailiure,
  createSongSuccess,
  showSongsSuccess,
  showSongsFailiure,
  deleteSongSuccess,
  deleteSongFailiure,
  updateSongSuccess,
  updateSongFailiure
}
