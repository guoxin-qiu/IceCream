define(['vue', 'auth-storage', 'ajax'], function (Vue, auth, ajax) {
    Vue.component('bonbonniere-page', {
        data: function () {
            return {
                menus: [],
                fullName: auth.getUserInfo().fullName,
                footerMessage: '&copy; 2017 - Bonbonniere'
            }
        },
        template: ' \
            <div>\
                <div class="loading-div">\
                    <div class="sk-chasing-dots">\
                        <div class="sk-child sk-dot1"></div>\
                        <div class="sk-child sk-dot2"></div>\
                    </div>\
                </div>\
                <div name="page-header"> \
                    <nav class="navbar navbar-inverse navbar-fixed-top">\
                        <div class="container">\
                            <div class="navbar-header"><a class="navbar-brand">Bonbonniere</a></div>\
                            <div class="navbar-collapse collapse" id="navigation-menu">\
                                <ul class="nav navbar-nav">\
                                    <li v-for="menu in menus">\
                                        <a :href="menu.Url" v-text="menu.Text"></a>\
                                    </li></ul>\
                                <ul class="nav navbar-nav navbar-right">\
                                    <li><a v-text="fullName"></a></li>\
                                    <li><button @click="logoff" class="btn btn-link navbar-btn navbar-link">注销</button></li>\
                                </ul>\
                            </div>\
                        </div>\
                    </nav>\
                </div>\
                <div class="container body-content">\
                    <slot name="page-content"></slot>\
                </div>\
                <div name="page-footer" class="text-center">\
                    <footer><p v-html="footerMessage"></p></footer>\
                </div>\
            </div>',
        methods: {
            logoff: function () {
                auth.removeUserInfo();
                window.location.href = '../login.html';
            }
        },
        created: function(){
            var _self = this;
                ajax.get('/Menu', null, function (response) {
                    if (response.Success) {
                        _self.$data.menus = response.Menus;
                    }
                });
        },
        beforeCreate() {
            if (!auth.getUserInfo().username) {
                window.location.href = '../login.html';
            }
        }
    });
});