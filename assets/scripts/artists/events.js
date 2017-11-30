const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onCreateArtist = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createArtist(data)
    .then(ui.createArtistSuccess)
    .catch(ui.createArtistFailure)
}

const onShowArtists = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.showArtists(data)
    .then(ui.showArtistsSuccess)
    .catch(ui.showArtistsFailiure)
}

const addHandlers = function () {
  $('#create-artist').on('submit', onCreateArtist)
  $('#show-artists').on('submit', onShowArtists)
}

module.exports = {
  addHandlers
}
