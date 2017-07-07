define(['vue'], function (Vue) {
    Vue.component('bonbonniere-footer', {
        data: function(){
            return {
                message: '&copy; 2017 - Bonbonniere'
            }
        },
        template: '<div name="page-footer"><footer><p v-html="message"></p></footer></div>',
    });
    
});