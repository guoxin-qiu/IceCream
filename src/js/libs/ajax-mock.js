// https://github.com/jakerella/jquery-mockjax
define(['jquery', 'mockjax', 'data-storage', 'linqjs'], function ($, mockjax, database, linqjs) {
    'use strict';

    mockjax({
        url: '/Account/Login',
        responseTime: [300, 600],
        response: function (settings) {
            var user = linqjs.From(database.User.getAll()).FirstOrDefault(null, function (x) {
                return x.username === settings.data.username
            });
            if (user) {
                if (settings.data.password === 'admin') {
                    this.responseText = {
                        LoginSuccess: true
                    }
                }
            } else {
                this.responseText = {
                    LoginSuccess: false
                }
            }
        }
    });
});