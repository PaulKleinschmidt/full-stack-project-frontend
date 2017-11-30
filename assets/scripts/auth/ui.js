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
  console.log(store.song)
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
