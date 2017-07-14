require.config({
    baseUrl: '/bonbonniere-vue-simple/js/libs',
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
        'auth-storage': ['auth-storage'],
        'data-storage': ['data-storage'],
        'database-init': ['database-init'],

        'header': ['../vue-modules/header'],
        'footer': ['../vue-modules/footer'],
        'page-template': ['../vue-modules/page-template'],
        'modal': ['../vue-modules/modal'],
        'pagination': ['../vue-modules/pagination'],
    }
});