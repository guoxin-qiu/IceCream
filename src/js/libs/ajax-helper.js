define(['jquery', 'ajax-mock'], function ($) {
    'use strict';

    function ajax(url, type, dataType, data, fnSuccess) {
        var jsonData = data;
        $.ajax({
            url: url,
            type: type,
            dataType: dataType,
            data: jsonData,
            cache: false,
            timeout: 30000,
            beforeSend: function () {
                $(".loading-div").show();
                $(".loading-img").delay(2000).show(0);
            },
            success: function (data) {
                $(".loading-div").hide();
                $(".loading-img").stop().hide();

                if (data.Success + "" === "undefined" && data.Success === false) {
                    var statusCode = data.StatusCode || 0;
                    if (statusCode === 500) {
                        alert(data.Message || "服务器内部错误");
                        return;
                    } else if (statusCode === 401) {
                        alert(data.Message || "凭证失效请重新登录");
                        window.location.href = "/login.html";
                        return;
                    } else if (statusCode === 403) {
                        alert(data.Message || "您没有授权使用此功能");
                        return;
                    }
                }
                if (fnSuccess instanceof Function) {
                    try {
                        fnSuccess(data);
                    } catch (e) {
                        alert("运行过程中出现未知异常");
                    }
                }
            },
            error: function (xhr, errorType, error) {
                $(".loading-div").hide();
                $(".loading-img").stop().hide();

                if (errorType === 'timeout') {
                    alert("访问超时");
                } else {
                    // alert("访问服务器资源被拒绝");
                    alert('Ajax request error, errorType: ' + errorType + ', error: ' + error);
                }
            }
        });
    }

    function get(url, data, callback) {
        ajax(url, 'GET', 'JSON', data, callback);
    };

    function post(url, data, callback) {
        ajax(url, 'POST', 'JSON', data, callback);
    };

    function put(url, data, callback) {
        ajax(url, 'PUT', 'JSON', data, callback);
    };

    function remove(url, data, callback) {
        ajax(url, 'DELETE', 'JSON', data, callback);
    };

    return {
        get: get,
        post: post,
        delete: remove,
        put: put
    }
})