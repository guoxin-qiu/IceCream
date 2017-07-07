define(['vue'], function (Vue) {
    Vue.component('bonbonniere-modal', {
        template: ' \
            <transition name="modal">\
                <div class="modal-mask">\
                    <div class="modal-wrapper">\
                        <div class="modal-content">\
                            <div class="modal-header">\
                                <button type="button" class="close" @click="$emit(\'close\')"><span>&times;</span></button>\
                                <slot name="modal-header"></slot>\
                            </div>\
                            <div class="modal-body">\
                                <slot name="modal-body"></slot>\
                            </div>\
                            <div class="modal-footer">\
                                <slot name="modal-footer"></slot>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </transition>'
    });
});