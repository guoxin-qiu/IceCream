define([], function () {
    'use strict';

    function Repository(storageKey, jsonKey) {
        let storage = window.localStorage;

        let _getStorage = function () {
            var listStr = storage.getItem(storageKey);
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
                for (let i = 0; i < list.length; i++) {
                    if (list[i].Id === item.Id) {
                        throw new Error('Duplicate Id with ' + item.Id);
                    }
                }
                list.push(item);
                _setStorage(list);
            },
            update: function (id, itemForUpdate) {
                let list = this.getAll();
                for (let i = 0; i < list.length; i++) {
                    if (list[i].Id === id) {
                        list[i] = itemForUpdate;
                        return false;
                    }
                }
                _setStorage(list);
            },
            delete: function (id) {
                let list = this.getAll();
                for (let i = 0; i < list.count; i++) {
                    if (list[i].Id === id) {
                        list.split(i, 1);
                        return false;
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
        User: new Repository('database-user', 'users')
    }
})