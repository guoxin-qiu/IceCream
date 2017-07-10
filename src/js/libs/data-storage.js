define([], function () {
    'use strict';

    function Repository(storageKey, jsonKey) {
        let storage = window.localStorage;

        let _getStorage = function () {
            let listStr = storage.getItem(storageKey);
            if (!listStr) {
                return JSON.parse('{"' + jsonKey + '":[]}');
            }
            try {
                return JSON.parse(listStr);
            } catch (ex) {
                throw ex;
            }
        };
        let _setStorage = function (list) {
            var table = JSON.parse('{"' + jsonKey + '":[]}');
            table[jsonKey] = list;
            storage.setItem(storageKey, JSON.stringify(table));
        };

        return {
            add: function (item) {
                let list = this.getAll();
                let maxId = 1;
                for (let i = 0; i < list.length; i++) {
                    maxId = maxId > list[i].Id ? maxId : list[i].Id;
                }
                item.Id = maxId + 1;
                list.push(item);
                _setStorage(list);
            },
            update: function (id, itemForUpdate) {
                let list = this.getAll();
                for (let i = 0; i < list.length; i++) {
                    if (list[i].Id === id) {
                        list[i] = itemForUpdate;
                        break;
                    }
                }
                _setStorage(list);
            },
            delete: function (id) {
                let list = this.getAll();
                for (let i = 0; i < list.length; i++) {
                    if (list[i].Id === id) {
                        list.splice(i, 1);
                        break;
                    }
                }
                _setStorage(list);
            },
            deleteAll: function () {
                _setStorage([]);
            },
            getAll: function () {
                return _getStorage()[jsonKey];
            }
        }
    }

    return {
        User: new Repository('database-user', 'users'),
        Menu: new Repository('database-menu', 'menus')
    }
})