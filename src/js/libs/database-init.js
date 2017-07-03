define(['data-storage'], function (database) {
    (function () {
        initUser();
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
});