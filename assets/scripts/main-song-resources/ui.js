'use strict'

const showFavorites = require('../templates/favorite-listing.handlebars')
const showUpdatedFavorite = require('../templates/update-favorite.handlebars')

const createFavoriteSuccess = function (data) {
  $('#message').text('new favorite made')
}

const createFavoriteFailiure = function (data) {
  $('#message').text('failed')
  console.log('favorite data', data)
}

const showFavoritesSuccess = function (data) {
  console.log(data)
  $('#message').text('success')
  $('.content').empty()

  // Show favorites using handlebars
  const showFavoritesHtml = showFavorites({ favorites: data.favorites })
  $('.content').append(showFavoritesHtml)
}
const showFavoritesFailiure = function (data) {
  $('#message').text('failiure')
}
const deleteFavoriteSuccess = function (data) {
  $('#message').text('successfully deleted favorite')
}
const deleteFavoriteFailiure = function (data) {
  $('#message').text('You do not have permission to delete this favorite')
}
const updateFavoriteSuccess = function (data) {
  $('#message').text('successfully updated favorite')
  $('.content').empty()

  // Show updated favorite using handlebars
  const showUpdatedFavoriteHtml = showUpdatedFavorite({ favorites: data })
  $('.content').append(showUpdatedFavoriteHtml)
}
const updateFavoriteFailiure = function (data) {
  $('#message').text('You do not have permission to update this favorite')
}

module.exports = {
  createFavoriteFailiure,
  createFavoriteSuccess,
  showFavoritesSuccess,
  showFavoritesFailiure,
  deleteFavoriteSuccess,
  deleteFavoriteFailiure,
  updateFavoriteSuccess,
  updateFavoriteFailiure
}
