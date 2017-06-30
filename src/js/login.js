require(['./libs/require-config'], function () {
    require(['vue', 'ajax'], function (Vue, ajax) {
        new Vue({
            el: "#app",
            data: {
                username: '',
                password: '',
                rememberMe: false,
                content: {
                    placeholder_username: '请输入用户名或电子邮件',
                    placeholder_password: '请输入密码',
                    rememberMe: 'Remember me'
                }
            },
            methods: {
                login: function () {
                    if (this.username.length == 0 || this.password.length == 0) {
                        alert('用户名和密码不能为空');
                        return;
                    }
                    ajax.get('/Account/Login', {
                        username: this.username,
                        password: this.password
                    }, function (response) {
                        if(response.LoginSuccess){
                            alert('登录成功');
                        }else{
                            alert('用户名或密码错误，请重新输入');
                        }
                    });
                }
            }
        });
    });
});