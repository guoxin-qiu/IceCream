define(['data-storage'], function (database) {
    (function () {
        initUser();
        initMenu();
    })();

    function initUser() {
        database.User.deleteAll();
        database.User.add({
            Id: 1,
            Username: 'admin',
            FullName: 'administrator',
            Email: 'admin@sydq.cn'
        });
        database.User.add({
            Id: 2,
            Username: 'denis',
            FullName: 'Denis',
            Email: 'denis@sydq.cn'
        });
        database.User.add({
            Id: 3,
            Username: 'test1',
            FullName: 'ZhangSan',
            Email: 'test1@sydq.cn'
        });
        database.User.add({
            Id: 4,
            Username: 'test2',
            FullName: 'WangWu',
            Email: 'test2@sydq.cn'
        });
    }
    function initMenu(){
        database.Menu.deleteAll();
        database.Menu.add({
            Id: 1,
            Text: '主页',
            Url: './index.html',
            IsActive: true
        });
        database.Menu.add({
            Id: 2,
            Text: '用户管理',
            Url: './user.html',
            IsActive: true
        });
        database.Menu.add({
            Id: 99,
            Text: 'API',
            Url: './api.html',
            IsActive: true
        });
    }
});