require(['../libs/require-config'], function () {
    require(['vue', 'ajax', 'page-template', 'modal'], function (Vue, ajax) {
        new Vue({
            el: '#app',
            data: {
                columns: ['Username', 'FullName', 'Email'],
                users: [],
                showModal: false,
                curUser: {},
                searchText: '',
                isNew: false,
                isEditing: false,
                viewDataLoaded: false
            },
            methods: {
                search: function () {
                    var _self = this;
                    ajax.get('/User/Search', {
                        key: _self.searchText
                    }, function (response) {
                        if (response.Success) {
                            _self.users = response.Users;
                        }
                    });
                },
                viewUser: function (id) {
                    var _self = this;
                    _self.curUser = {};
                    _self.openModalView();

                    ajax.get('/User', {
                        id: id
                    }, function (response) {
                        if (response.Success) {
                            _self.curUser = response.User;
                            _self.viewDataLoaded = true;
                        }
                    });
                },
                addUser: function () {
                    this.curUser = {};
                    this.openModalNew();                    
                },
                editUser: function () {
                    this.isEditing = true;
                },
                cancelEditUser: function () {
                    if (!this.curUser.Id) {
                        this.closeModal();
                    }
                    this.isEditing = false;
                },
                saveUser: function () {
                    var _self = this;
                    if (_self.curUser.Id) {
                        ajax.put('/User', {
                            id: _self.curUser.Id,
                            user: _self.curUser
                        }, function (response) {
                            if (response.Success) {
                                _self.closeModal();
                            }
                        });
                    } else {
                        ajax.post('/User', {
                            user: _self.curUser
                        }, function (response) {
                            if (response.Success) {
                                _self.closeModal();
                            }
                        });
                    }
                },
                delUser: function () {
                    var _self = this;
                    if (confirm('delete user with username ' + _self.curUser.Username + '?')) {
                        ajax.delete('/User', {
                            id: _self.curUser.Id
                        }, function (response) {
                            if (response.Success) {
                                _self.closeModal();
                            }
                        });
                    }
                },
                openModalNew: function(){
                    this.isNew = true;
                    this.isEditing = true;
                    this.viewDataLoaded = true;
                    this.showModal = true;
                },
                openModalView: function(){
                    this.isEditing = false;
                    this.viewDataLoaded = false;
                    this.isNew = false;
                    this.showModal = true;
                },
                closeModal: function(){
                    this.showModal = false;
                    this.search();
                }
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