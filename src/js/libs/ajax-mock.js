// https://github.com/jakerella/jquery-mockjax
define(['jquery', 'mockjax'], function ($, mockjax) {
    mockjax({
        url: '/Account/Login',
        responseTime: [3000, 6000],
        response: function (settings) {
            var loginSuccess = (settings.data.username === 'admin' && settings.data.password === 'admin');
            this.responseText = {
                LoginSuccess: loginSuccess
            }
        }
    });
});