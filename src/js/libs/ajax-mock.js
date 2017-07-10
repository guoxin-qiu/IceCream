// https://github.com/jakerella/jquery-mockjax
define(['jquery', 'mockjax', 'data-storage', 'database-init', 'linqjs'], function ($, mockjax, db, dbInit, linqjs) {
    'use strict';
    var responseTime = [300, 500];
    mockjax({
        url: '/Account/Login',
        // responseTime: responseTime,
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
    mockjax({
        url: '/User',
        response: function (settings) {
            if (settings.data && settings.data.id) {
                var user = linqjs.From(db.User.getAll()).FirstOrDefault(null, function (u) {
                    return u.Id === settings.data.id;
                });
                this.responseText = {
                    Success: true,
                    Message: '',
                    User: user
                }
            } else {
                var users = db.User.getAll();
                this.responseText = {
                    Success: true,
                    Message: '',
                    Users: users
                }
            }
        }
    });

    mockjax({
        url: '/Menu',
        response: function (settings) {
            var menus = db.Menu.getAll();
            this.responseText = {
                Success: true,
                Message: '',
                Menus: menus
            }
        }
    });
});