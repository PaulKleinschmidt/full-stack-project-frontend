'use strict'

const showFavorites = require('../templates/favorite-listing.handlebars')
const showUpdatedFavorite = require('../templates/update-favorite.handlebars')
const showSongs = require('../templates/song-listing.handlebars')
const favoritesApi = require('./api.js')

let userFavorites = 0

const checkFavorites = function (data) {
  if (data === undefined) {
    userFavorites -= 1
  } else {
    userFavorites = data.favorites.length
  }
  displayFavoriteForms()
}

const displayFavoriteForms = function () {
  if (userFavorites === 0) {
    $('#show-favorites').hide()
    $('#update-favorite').hide()
    $('#delete-favorite').hide()
    $('#message').text('Search Songs To Add To Your Favorites!')
  } else {
    $('#show-favorites').show()
    $('#update-favorite').show()
    $('#delete-favorite').show()
  }
}

const createFavoriteSuccess = function (data) {
  userFavorites += 1
  displayFavoriteForms()
  $('#message').text('new favorite made')
  $('#show-favorites').show()
  // const showFavoriteHtml = showCreatedFavorite ({ favorites: data })
  const showSongsHtml = showSongs({ songs: data.songs, favorite: data.favorite.song.title })
  $('.content').append(showSongsHtml)
}

const createFavoriteFailiure = function (data) {
  $('#message').text('failed')
}

const showFavoritesSuccess = function (data) {
  $('#message').empty()
  $('#message').text('Favorites:')
  $('.content').empty()
  displayFavoriteForms()

  // Show favorites using handlebars
  const showFavoritesHtml = showFavorites({ favorites: data.favorites })
  $('.content').append(showFavoritesHtml)
}

const showFavoritesFailiure = function (data) {
  $('#message').text('failiure')
}

const deleteFavoriteSuccess = function (data) {
  $('#message').empty()
  // clear forms
  // $('#delete-favorite')[0].reset()
  checkFavorites()

  favoritesApi.showFavorites()
    .then(showFavoritesSuccess)
    .catch(console.error())
}

const deleteFavoriteFailiure = function (data) {
  // $('#message').text('You do not have permission to delete this favorite')
  $('.content').empty()

  // clear forms
  // $('#delete-favorite')[0].reset()
}

const updateFavoriteSuccess = function (data) {
  $('#message').text('successfully updated favorite')
  $('.content').empty()

  // clear forms
  $('#update-favorite')[0].reset()

  // Show updated favorite using handlebars
  const showUpdatedFavoriteHtml = showUpdatedFavorite({ favorites: data })
  $('.content').append(showUpdatedFavoriteHtml)
}

const updateFavoriteFailiure = function (data) {
  $('#message').text('You do not have permission to update this favorite')
  // clear forms
  $('#update-favorite')[0].reset()
}

module.exports = {
  createFavoriteFailiure,
  createFavoriteSuccess,
  showFavoritesSuccess,
  showFavoritesFailiure,
  deleteFavoriteSuccess,
  deleteFavoriteFailiure,
  updateFavoriteSuccess,
  updateFavoriteFailiure,
  checkFavorites
}
