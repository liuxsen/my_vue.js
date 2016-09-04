var Vue = require('vue');

// 定义组件
var MyComponentParent = Vue.extend({
    data: function() {
        return {
            parentMsg: '我是parent中的数据',
            num: 30,
            num1: 30,
        }
    },
    template: "<div>a custom parent component" +
        "<my-component-child " +
        "v-bind:parent-msg = 'parentMsg' " +
        "v-bind:parent-num='num'" +
        "v-bind:numto-s='num1'" +
        "</my-component-child>" +
        "</div>",
    components: {
        'my-component-child': {
            props: {
                parentMsg: {
                    type: String,
                    required: true,
                    default: 'hello'
                },
                parentNum: {
                    type: Number,
                    validator: function(num) {
                        return num < 40
                    }
                },
                numtoS: {
                    coerce: function(val) {
                        return val + ' px' // 将值转换为字符串
                    }
                }
            },
            data: function() {
                return { msg: 'msg 数据来自子组件自身' }
            },
            template: '<div> a custom child component {{msg}} {{parentMsg}} {{parentNum}} {{numtoS}}</div>'
        }
    }
});
// 注册组件
// Vue.component('my-component-child', MyComponentChild);
Vue.component('my-component-parent', MyComponentParent);

new Vue({
    el: '#component'
})

// 注册子组件
// 将当前消息派发出去

var child = Vue.extend({
    template: '#child-template',
    data: function() {
        return { msg: 'hello' }
    },
    methods: {
        notify: function() {
            if (this.msg.trim()) {
                this.$dispatch('child-msg', this.msg)
                this.msg = ''
            }
        }
    }
})
Vue.component('child', child);

// 初始化父组件
// 将收到消息时将事件推入一个数组
var parent = new Vue({
    el: '#events-example',
    data: {
        messages: []
    },
    // 在创建实例时 `events` 选项简单地调用 `$on`
    events: {
        'child-msg': function(msg) {
            // 事件回调内的 `this` 自动绑定到注册它的实例上
            this.messages.push(msg)
        }
    }
})
