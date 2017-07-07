require(['./libs/require-config'], function () {
    require(['vue', 'ajax', 'page-template', 'modal'], function (Vue, ajax) {
        new Vue({
            el: '#app',
            data: {
                tabIndex: 1,
                message: 'Welcome to enjoy bonbonniere vue simple sample.',
                columns: ['Username', 'FullName', 'Email'],
                users: [],
                showModal: false
            },
            methods: {
                getHref: function (id) {
                    return 'index.html#user-detail?id=' + id;
                }
            },
            created: function () {
                var _self = this;
                ajax.get('/User', null, function (response) {
                    if (response.Success) {
                        _self.$data.users = response.Users;
                    }
                });
            }
        });
    });
});