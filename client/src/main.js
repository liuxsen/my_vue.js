import Vue from 'vue'
import App from './App'
require('./lib/bower_components/bootstrap/dist/css/bootstrap.css')

import VueResource from 'vue-resource'
Vue.use(VueResource)
    /* eslint-disable no-new */
new Vue({
    el: 'body',
    components: { App }
})

import myForm from './components/myForm'
import getData from './components/getData'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
var routerApp = Vue.extend({})
var router = new VueRouter();
// router.map({
//         '/myForm': {
//             component: myForm
//         },
//         '/getData': {
//             component: getData
//         }
//     })
// router.start(routerApp, "#app")
