'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const showDeletedSong = require('../templates/delete-song.handlebars')
const artistApi = require('../artists/api.js')

const onCreateSong = function (event) {
  const data = getFormFields(this)
  console.log('song data', data)
  event.preventDefault()
  api.createSong(data)
    .then(ui.createSongSuccess)
    .catch(ui.createSongFailure)
}

const onShowSongs = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.showSongs(data)
    .then(ui.showSongsSuccess)
    .catch(ui.showSongsFailiure)
}

const onDeleteSong = function (event) {
  const data = getFormFields(this)

  // Show deleted song ID using handlebars
  $('.content').empty()
  const showDeletedHtml = showDeletedSong({ songs: data.song })
  $('.content').append(showDeletedHtml)

  event.preventDefault()
  api.deleteSong(data)
    .then(ui.deleteSongSuccess)
    .catch(ui.deleteSongFailiure)
}

const onUpdateSong = function (event) {
  const data = getFormFields(this)
  console.log('here is the data:', data)
  event.preventDefault()
  api.updateSong(data)
    .then(ui.updateSongSuccess)
    .catch(ui.updateSongFailiure)
}

const addHandlers = function () {
  $('#create-song').on('submit', onCreateSong)
  $('#show-songs').on('submit', onShowSongs)
  $('#delete-song').on('submit', onDeleteSong)
  $('#update-song').on('submit', onUpdateSong)
}

module.exports = {
  addHandlers
}
