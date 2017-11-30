const store = require('../store')


const createSongSuccess = function (data) {
  $('#message').text('new song made')
}

const createSongFailiure = function (data) {
  $('#message').text('failed')
}

const showSongsSuccess = function (data) {
  console.log(data)
  $('#message').text('success')
}
const showSongsFailiure = function (data) {
  $('#message').text('failiure')
}

module.exports = {
  createSongFailiure,
  createSongSuccess,
  showSongsSuccess,
  showSongsFailiure
}
