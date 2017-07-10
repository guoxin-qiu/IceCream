require(['./libs/require-config'], function () {
    require(['vue', 'page-template'], function (Vue) {
        new Vue({
            el: '#app',
            data: {
                tabIndex: 1,
                message: 'Welcome to enjoy bonbonniere vue simple sample.',
            }
        });
    });
});