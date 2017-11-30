
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
const deleteSongSuccess = function (data) {
  console.log(data)
  $('#message').text('successfully deleted song')
}
const deleteSongFailiure = function (data) {
  $('#message').text('You do not have permission to delete this song')
}
const updateSongSuccess = function (data) {
  $('#message').text('successfully updated song')
}
const updateSongFailiure = function (data) {
  $('#message').text('You do not have permission to update this song')
}

module.exports = {
  createSongFailiure,
  createSongSuccess,
  showSongsSuccess,
  showSongsFailiure,
  deleteSongSuccess,
  deleteSongFailiure,
  updateSongSuccess,
  updateSongFailiure
}
