define([], function () {
    'use strict';

    var storage = window.sessionStorage; //window.localStorage;
    var userInfoKey = '$userInfo';

    function getUserInfo() {
        try {
            var user = storage.getItem(userInfoKey);
            if (user) {
                return JSON.parse(user);
            } else {
                return {
                    username: '',
                    fullName: '',
                    email: ''
                };
            }

        } catch (ex) {
            throw new Error(ex);
        }
    }

    function setUserInfo(userInfo) {
        if (!userInfo) {
            throw new Error('Argument can not be null.');
        }
        var user = {
            username: userInfo.Username,
            fullName: userInfo.FullName,
            email: userInfo.Email
        };
        storage.setItem(userInfoKey, JSON.stringify(user));
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