const store = require('../store')


const createSongSuccess = function (data) {
  $('#message').text('new song made')
}

const createSongFailiure = function (data) {
  $('#message').text('failed')
}

module.exports = {
  createSongFailiure,
  createSongSuccess
}
