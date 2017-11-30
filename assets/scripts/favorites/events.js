'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const showDeletedFavorite = require('../templates/delete-favorite.handlebars')

const onCreateFavorite = function (event) {
  const data = getFormFields(this)
  console.log('favorite data', data)
  event.preventDefault()
  api.createFavorite(data)
    .then(ui.createFavoriteSuccess)
    .catch(ui.createFavoriteFailure)
}

const onShowFavorites = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.showFavorites(data)
    .then(ui.showFavoritesSuccess)
    .catch(ui.showFavoritesFailiure)
}

const onDeleteFavorite = function (event) {
  const data = getFormFields(this)

  // Show deleted favorite ID using handlebars
  $('.content').empty()
  const showDeletedHtml = showDeletedFavorite({ favorites: data.favorite })
  $('.content').append(showDeletedHtml)

  event.preventDefault()
  api.deleteFavorite(data)
    .then(ui.deleteFavoriteSuccess)
    .catch(ui.deleteFavoriteFailiure)
}

const onUpdateFavorite = function (event) {
  const data = getFormFields(this)
  console.log('here is the data:', data)
  event.preventDefault()
  api.updateFavorite(data)
    .then(ui.updateFavoriteSuccess)
    .catch(ui.updateFavoriteFailiure)
}

const addHandlers = function () {
  $('#create-favorite').on('submit', onCreateFavorite)
  $('#show-favorites').on('submit', onShowFavorites)
  $('#delete-favorite').on('submit', onDeleteFavorite)
  $('#update-favorite').on('submit', onUpdateFavorite)
}

module.exports = {
  addHandlers
}
