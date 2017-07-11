require(['../libs/require-config'], function () {
    require(['vue', 'ajax', 'page-template', 'pagination', 'modal'], function (Vue, ajax) {
        new Vue({
            el: '#app',
            data: {
                columns: ['Username', 'FullName', 'Email'],
                users: [],
                curUser: {},
                originalUser: {},
                showModal: false,
                isNew: false,
                isEditing: false,

                searchText: '',
                searchTextLive: '',
                totalPageCount: 1,
                pageSize: 2,
                pageIndex: 1
            },
            methods: {
                _query: function (pageIndex) {
                    pageIndex = pageIndex || this.pageIndex;
                    var _self = this;
                    ajax.get('/User', {
                        key: _self.searchText,
                        pageIndex: pageIndex,
                        pageSize: this.pageSize
                    }, function (response) {
                        if (response.Success) {
                            _self.users = response.Users;
                            _self.totalPageCount = response.TotalPageCount;
                            _self.pageIndex = pageIndex;
                        }
                    });
                },
                search: function () {
                    this.searchText = this.searchTextLive;
                    this._query(1);
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
                            _self.originalUser = _self.deepCopy(response.User);
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
                    } else {
                        this.curUser = this.deepCopy(this.originalUser, this.curUser);
                        this.isEditing = false;
                    }
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
                openModalNew: function () {
                    this.isNew = true;
                    this.isEditing = true;
                    this.showModal = true;
                },
                openModalView: function () {
                    this.isEditing = false;
                    this.isNew = false;
                    this.showModal = true;
                },
                closeModal: function () {
                    this.showModal = false;
                    this._query();
                },
                deepCopy: function (p, c) {
                    c = c || {};
                    for (var i in p) {
                        if (p.hasOwnProperty(i)) {
                            if (typeof p[i] === 'object') {
                                c[i] = Array.isArray(p[i]) ? [] : {};
                                this.deepCopy(p[i], c[i]);
                            } else {
                                c[i] = p[i];
                            }
                        }
                    }
                    return c;
                }
            },
            created: function () {
                this._query();
            }
        });
    });
});