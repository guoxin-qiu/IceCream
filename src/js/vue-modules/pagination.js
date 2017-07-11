define(['vue', 'ajax'], function (Vue, ajax) {
    Vue.component('bonbonniere-pagination', {
        props: {
            totalPageCount:{
                type: Number,
                required: true
            },
            searchMethod:{
                type: Function,
                required: true
            }
        },
        data: function () {
            return {
                capacity: 5,
                curPageIndex: 1
            }
        },
        template: ' \
                <ul class="pagination" v-if="totalPageCount>0">\
                    <li @click="goto(1)" :class="{disabled: curPageIndex==1}"><a href="javascript:;">&lt;&lt;</a></li>\
                    <li @click="goto(curPageIndex-1)" :class="{disabled: curPageIndex==1}"><a href="javascript:;">&lt;</a></li>\
                    <li @click="goto(pageIndex)" v-for="pageIndex in pagesShow" :class="{active: curPageIndex==pageIndex}"><a href="javascript:;" v-text="pageIndex"></a></li>\
                    <li @click="goto(curPageIndex+1)" :class="{disabled: curPageIndex==totalPageCount}"><a href="javascript:;">&gt;</a></li>\
                    <li @click="goto(totalPageCount)" :class="{disabled: curPageIndex==totalPageCount}"><a href="javascript:;">&gt;&gt;</a></li>\
                </ul>',
        computed: {
            pagesShow: function () {
                let pages = [];
                let minPageIndexToShow = 1;
                let maxPageIndexToShow = this.totalPageCount;
                if (this.curPageIndex < this.capacity) {
                    minPageIndexToShow = 1;
                    maxPageIndexToShow = Math.min(this.capacity, this.totalPageCount);
                } else {
                    maxPageIndexToShow = Math.min((this.curPageIndex + Math.floor(this.capacity / 2)), this.totalPageCount);
                    minPageIndexToShow = maxPageIndexToShow - this.capacity + 1;
                }
                for (let i = minPageIndexToShow; i <= maxPageIndexToShow; i++) {
                    pages.push(i);
                }
                return pages;
            }
        },
        methods: {
            goto: function (index) {
                if (index < 1 || index > this.totalPageCount || index == this.curPageIndex) return;
                this.curPageIndex = index;
                this.searchMethod(this.curPageIndex);
            }
        }
    });
});