require.config({
    baseUrl: 'js/libs',
    shim: {
        'vue': {
            exports: 'vue'
        }
    },
    paths: {
        'jquery': ['../../vendor/jquery/dist/jquery'],
        'vue': ['../../vendor/vue/dist/vue'],
        'mockjax': ['../../vendor/mockjax/dist/jquery.mockjax'],
        'linqjs': ['../../vendor/linq/dist/linq'],

        'ajax-mock': ['ajax-mock'],
        'ajax': ['ajax-helper'],
        'auth-storage':['auth-storage'],

        'header':['../vue-modules/header'],
        'footer':['../vue-modules/footer'],
    }
});