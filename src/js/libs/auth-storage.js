define([], function () {
    'use strict';

    var storage = window.sessionStorage; //window.localStorage;
    var userInfoKey = '$userInfo';

    function getUserInfo() {
        try {
            return JSON.parse(storage.getItem(userInfoKey));
        } catch (ex) {
            return {
                username: '',
                fullName: '',
                email: ''
            };
        }
    }

    function setUserInfo(userInfo) {
        if(!userInfo){
            throw new Error('Argument can not be null.');
        }
        var user = {username: userInfo.Username,fullName: userInfo.FullName, email: userInfo.Email};
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