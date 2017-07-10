// https://github.com/jakerella/jquery-mockjax
define(['jquery', 'mockjax', 'data-storage', 'database-init', 'linqjs'], function ($, mockjax, db, dbInit, linqjs) {
    'use strict';
    var responseTime = [300, 500];
    mockjax({
        url: '/Account/Login',
        type: 'GET',
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
        // responseTime: [4000,6000],
        type: 'GET',
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
        url: '/User',
        type: 'POST',
        response: function (settings) {
            db.User.add(settings.data.user);
            this.responseText = {
                Success: true,
                Message: ''
            }
        }
    });

    mockjax({
        url: '/User',
        type: 'PUT',
        response: function (settings) {
            db.User.update(settings.data.id, settings.data.user);
            this.responseText = {
                Success: true,
                Message: ''
            }
        }
    });

    mockjax({
        url: '/User',
        type: 'DELETE',
        response: function (settings) {
            db.User.delete(settings.data.id);
            this.responseText = {
                Success: true,
                Message: ''
            }
        }
    });

    mockjax({
        url: '/User/Search',
        type: 'GET',
        response: function (settings) {
            if (settings.data && settings.data.key) {
                var users = linqjs.From(db.User.getAll())
                    .Where(function (u) {
                        var lowerKey = settings.data.key.toLowerCase();
                        return u.Username.toLowerCase().indexOf(lowerKey) > -1 ||
                            u.FullName.toLowerCase().indexOf(lowerKey) > -1 ||
                            u.Email.toLowerCase().indexOf(lowerKey) > -1;
                    }).ToArray();
                this.responseText = {
                    Success: true,
                    Message: '',
                    Users: users
                }
            } else {
                this.responseText = {
                    Success: true,
                    Message: '',
                    Users: db.User.getAll()
                }
            }
        }
    });

    mockjax({
        url: '/Menu',
        type: 'GET',
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