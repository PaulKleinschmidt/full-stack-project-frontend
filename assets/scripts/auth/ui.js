const store = require('../store')
const api = require('./api.js')
const events = require('./events.js')

const signUpSuccess = function () {
  $('#message').text('Signed up successfully!')
}

const signUpFailure = function () {
  $('#message').text('Error on sign up')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in Successfully')
  store.user = data.user
  $('.song-display').show()
  $('.auth').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('.logged-in-auth').show()
}

const signInFailure = function () {
  $('#message').text('sign in failed')
}

const changePasswordFailure = function () {
  $('#message').text('password change failed')
}

const changePasswordSuccess = function (data) {
  $('#message').text('password change successful')
}

const signOutSuccess = function () {
  $('#message').text('Signed Out Successfully')
  $('.auth').show()
  $('.song-display').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.logged-in-auth').hide()
  $('.content').empty()
}

const signOutFailure = function () {
  $('#message').text('Sign Out Failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
