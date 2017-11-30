'use strict'

const config = require('../config')
const store = require('../store')

const showSongs = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/songs/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  showSongs
}
