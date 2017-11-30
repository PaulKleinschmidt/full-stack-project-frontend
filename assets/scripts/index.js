'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./auth/events')
const songEvents = require('./songs/events')
const artistEvents = require('./artists/events')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  events.addHandlers()
  songEvents.addHandlers()
  artistEvents.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
