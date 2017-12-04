'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onShowSongs = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.showSongs(data)
    .then(ui.showSongsSuccess)
    .catch(ui.showSongsFailiure)
}

const addHandlers = function () {
  $('#show-songs').on('submit', onShowSongs)
  $('#search-songs').on('submit', onShowSongs)
}

module.exports = {
  addHandlers
}
