define(['data-storage'], function (database) {
    (function () {
        initUser();
    })();

    function initUser() {
        database.User.deleteAll();
        database.User.add({
            key: 1,
            username: 'admin'
        });
    }
});