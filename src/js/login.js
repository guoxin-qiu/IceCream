require(['./libs/require-config'], function () {
    require(['vue', 'ajax','auth-storage'], function (Vue, ajax, storage) {
        new Vue({
            el: '#app',
            data: {
                username: '',
                password: '',
                rememberMe: false,
                message: ''
            },
            methods: {
                login: function () {
                    var _self = this;
                    if (_self.username.length == 0 || _self.password.length == 0) {
                        _self.message = '用户名和密码不能为空';
                        return;
                    }
                    ajax.get('/Account/Login', {
                        username: _self.username,
                        password: _self.password
                    }, function (response) {
                        if (response.LoginSuccess) {
                            storage.setUserInfo(response.UserInfo);
                            window.location.href = 'index.html';
                        } else {
                            _self.message = '用户名或密码错误，请重新输入';
                        }
                    });
                }
            }
        });
    });
});