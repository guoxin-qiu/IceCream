require(['./libs/require-config'], function () {
    require(['vue', 'ajax', 'header', 'footer'], function (Vue, ajax) {
        new Vue({
            el: '#content',
            data: {
                message: 'Welcome to enjoy bonbonniere vue simple sample.',
                columns: ['Username', 'FullName', 'Email'],
                users: []
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