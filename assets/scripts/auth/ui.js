const store = require('../store')
const favoritesApi = require('../favorites/api.js')
const favoritesUi = require('../favorites/ui.js')

const signUpSuccess = function () {
  $('#auth-message').text('Signed up Successfully')
  $('#sign-up')[0].reset()
}

const signUpFailure = function () {
  $('#auth-message').text('Sign up Failed')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('.song-display').show()
  $('.auth').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('.logged-in-auth').show()
  $('#sign-in')[0].reset()
  $('#sign-up')[0].reset()
  $('#auth-message').empty()
  favoritesApi.showFavorites(data)
    .then(favoritesUi.checkFavorites)
    .catch(console.error())
}

const signInFailure = function () {
  $('#auth-message').text('Sign in failed')
}

const changePasswordFailure = function () {
  $('#message').text('Cannot change Password')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Password changed')
}

const signOutSuccess = function () {
  $('.auth').show()
  $('.song-display').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.logged-in-auth').hide()
  $('.content').empty()
  $('#message').empty()
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
