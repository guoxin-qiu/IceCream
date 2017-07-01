define(['vue'], function (Vue) {
    var data = {
        message: '&copy; 2017 - Bonbonniere'
    };
    var footer = Vue.extend({
            template: '<footer><p v-html="message"></p></footer>',
        data: function () {
            return data;
        }
    });
    Vue.component('bonbonniere-footer', footer);
    new Vue({
        el: '#footer'
    });
});