'use strict'

const showFavorites = require('../templates/favorite-listing.handlebars')
const showUpdatedFavorite = require('../templates/update-favorite.handlebars')
const showSongs = require('../templates/song-listing.handlebars')

const createFavoriteSuccess = function (data) {
  $('#message').text('new favorite made')
  console.log('data boi', data.favorite.song.title)
  // const showFavoriteHtml = showCreatedFavorite ({ favorites: data })
  const showSongsHtml = showSongs({ songs: data.songs, favorite: data.favorite.song.title })
  $('.content').append(showSongsHtml)
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

  // clear forms
  $('#delete-favorite')[0].reset()
}

const deleteFavoriteFailiure = function (data) {
  $('#message').text('You do not have permission to delete this favorite')

  // clear forms
  $('#delete-favorite')[0].reset()
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
  updateFavoriteFailiure
}
