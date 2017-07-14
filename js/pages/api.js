require(['../libs/require-config'], function () {
    require(['vue', 'page-template'], function (Vue) {
        new Vue({
            el: '#app',
            data: {
                columns: ['Api', 'Type'],
                apis: [{
                        Api: '/Account/Login',
                        Type: 'GET',
                        Description: ''
                    }, {
                        Api: '/User',
                        Type: 'GET',
                        Description: ''
                    }, {
                        Api: '/User/{id}',
                        Type: 'GET',
                        Description: ''
                    },
                    {
                        Api: '/Menu',
                        Type: 'GET',
                        Description: ''
                    }
                ]
            }
        });
    });
});