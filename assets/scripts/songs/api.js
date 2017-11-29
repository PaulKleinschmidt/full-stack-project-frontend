const config = require('../config')
const store = require('../store')

const createSong = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/songs/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createSong
}
