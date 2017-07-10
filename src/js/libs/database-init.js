define(['data-storage'], function (database) {
    (function () {
        initUser();
        initMenu();
    })();

    function initUser() {
        database.User.deleteAll();
        database.User.addRange([{
                Id: 1,
                Username: 'admin',
                FullName: 'administrator',
                Email: 'admin@sydq.cn'
            }, {
                Id: 2,
                Username: 'denis',
                FullName: 'Denis',
                Email: 'denis@sydq.cn'
            }, {
                Id: 3,
                Username: 'test1',
                FullName: 'ZhangSan',
                Email: 'test1@sydq.cn'
            },
            {
                Id: 4,
                Username: 'test2',
                FullName: 'WangWu',
                Email: 'test2@qq.cn'
            }
        ]);
    }

    function initMenu() {
        database.Menu.deleteAll();
        database.Menu.addRange([{
            Id: 1,
            Text: '主页',
            Url: './index.html',
            IsActive: true
        }, {
            Id: 2,
            Text: '用户管理',
            Url: './user.html',
            IsActive: true
        }, {
            Id: 99,
            Text: 'API',
            Url: './api.html',
            IsActive: true
        }]);
    }
});