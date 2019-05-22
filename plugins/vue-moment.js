import Vue from 'vue'
import VueMoment from 'vue-moment'

const moment = require('moment')
require('moment/locale/pt-br')

Vue.use(VueMoment, {
  moment
})
