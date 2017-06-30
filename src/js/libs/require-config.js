require.config({
    baseUrl: 'vendor/',
    shim: {
        'vue': {
            exports: 'vue'
        }
    },
    paths: {
        'jquery': ['jquery/dist/jquery'],
        'vue': ['vue/dist/vue'],
        'mockjax': ['mockjax/dist/jquery.mockjax'],
        'ajax-mock': ['../js/libs/ajax-mock'],
        'ajax': ['../js/libs/ajax-helper']
    }
});