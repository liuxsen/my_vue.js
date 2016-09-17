var Vue = require('vue');
Vue.directive('demo', function(value) {
    console.log(value);
    this.el.style.color = value.color;
})
