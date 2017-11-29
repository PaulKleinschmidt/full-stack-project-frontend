const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onCreateSong = function (event) {
  const data = getFormFields(this)
  console.log('data!', data)
  event.preventDefault()
  api.createSong(data)
    .then(ui.createSongSuccess)
    .catch(ui.createSongFailure)
}

const addHandlers = function () {
  $('#create-song').on('submit', onCreateSong)
}

module.exports = {
  addHandlers
}
