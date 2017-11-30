'use strict'

const config = require('../config')
const store = require('../store')

const createFavorite = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/favorites/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showFavorites = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/favorites/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteFavorite = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/favorites/' + data.favorite.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const updateFavorite = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/favorites/' + data.favorite.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createFavorite,
  showFavorites,
  deleteFavorite,
  updateFavorite
}
