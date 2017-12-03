'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')

// const onSearchSongs = function (event) {
//   const data = getFormFields(this)
//   // searchData.search = data
//   // console.log('here we go', searchData)
//   event.preventDefault()
//   api.showSongs(data)
//     .then(ui.searchSongsSuccess)
//     .catch(ui.showSongsFailiure)
//   // for (var i = 0; i < songs.length; i++) {
//   //   songs[i]
//   // }
// }

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
