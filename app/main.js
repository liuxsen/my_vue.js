var Vue = require('vue');

var App = require('./js/components/app.vue')
new Vue({
    el: 'body',
    data: {},
    components: {
        myApp: App
    }
})
