// https://github.com/jakerella/jquery-mockjax
define(['jquery', 'mockjax', 'data-storage', 'database-init', 'linqjs'], function ($, mockjax, db, dbInit, linqjs) {
    'use strict';
    mockjax({
        url: '/Account/Login',
        responseTime: [300, 600],
        response: function (settings) {
            var user = linqjs.From(db.User.getAll()).FirstOrDefault(null, function (x) {
                return x.Username === settings.data.username
            });
            if (user) {
                if (settings.data.password === 'admin') {
                    this.responseText = {
                        LoginSuccess: true,
                        UserInfo: user
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