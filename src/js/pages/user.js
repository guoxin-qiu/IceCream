require(['../libs/require-config'], function () {
    require(['vue', 'ajax', 'page-template', 'modal'], function (Vue, ajax) {
        new Vue({
            el: '#app',
            data: {
                columns: ['Username', 'FullName', 'Email'],
                users: [],
                showModal: false,
                curEditUser: {}
            },
            methods: {
                openEdit: function (id) {
                    debugger
                    var _self = this;
                    ajax.get('/User', {
                        id: id
                    }, function (response) {
                        if (response.Success) {
                            _self.curEditUser = response.User;
                            _self.showModal = true;

                        }
                    });
                },
                saveUser: function () {
                    alert(this.curEditUser.Username + ', ' + this.curEditUser.FullName + ', ' + this.curEditUser.Email);
                },
        
            },
            created: function () {
                var _self = this;
                ajax.get('/User', null, function (response) {
                    if (response.Success) {
                        _self.$data.users = response.Users;
                    }
                });
            }
        });
    });
});