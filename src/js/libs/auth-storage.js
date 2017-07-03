define([], function () {
    'use strict';

    var storage = window.sessionStorage; //window.localStorage;
    var userInfoKey = '$userInfo';

    function getUserInfo() {
        try {
            return JSON.parse(storage.getItem(userInfoKey));
        } catch (ex) {
            return {
                username: ''
            };
        }
    }

    function setUserInfo(username) {
        var userInfo = {username: username || ''};
        storage.setItem(userInfoKey, JSON.stringify(userInfo));
    }

    function removeUserInfo() {
        storage.removeItem(userInfoKey);
    }

    return {
        setUserInfo: setUserInfo,
        getUserInfo: getUserInfo,
        removeUserInfo: removeUserInfo
    }
})