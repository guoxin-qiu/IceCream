require(['./libs/require-config'], function () {
    require(['vue', 'ajax','header','footer'], function (Vue, ajax) {
        new Vue({
            el: '#content',
            data: {
                message: 'Welcome to enjoy bonbonniere vue simple sample.',
            }
        });
    });
});