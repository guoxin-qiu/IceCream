define(['vue', 'auth-storage'], function (Vue, storage) {
    Vue.component('bonbonniere-header', {
        data: function () {
            return {
                menus: [{
                    name: "首页",
                    url: "./index.html",
                }],
                fullName: storage.getUserInfo().fullName
            }
        },
        template: ' \
            <div name="page-header"> \
                <nav class="navbar navbar-inverse navbar-fixed-top">\
                    <div class="container">\
                        <div class="navbar-header"><a class="navbar-brand">Bonbonniere</a></div>\
                        <div class="navbar-collapse collapse" id="navigation-menu">\
                            <ul class="nav navbar-nav">\
                                <li v-for="menu in menus">\
                                    <a :href="menu.url" v-text="menu.name"></a>\
                                </li></ul>\
                            <ul class="nav navbar-nav navbar-right">\
                                <li><a v-text="fullName"></a></li>\
                                <li><button @click="logoff" class="btn btn-link navbar-btn navbar-link">注销</button></li>\
                            </ul>\
                        </div>\
                    </div>\
                </nav>\
            </div>',
        methods: {
            logoff: function () {
                storage.removeUserInfo();
                window.location.href = 'login.html';
            }
        },
        beforeCreate() {
            if (!storage.getUserInfo().username) {
                window.location.href = 'login.html';
            }
        }
    });
});