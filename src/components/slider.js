define(function(require) {
    let Vue = require("js/vue");

    let template = require("src/js/text.js!html/slider.html");

    Vue.component("slider", {
        template: template,
        data() {
            return {
                children: [],
                nowItemIndex: 0,
                timer: 0,
            }
        },

        props: {
            width: {
                type: String,
                default: 'auto'
            },
            height: {
                type: String,
                default: '300px'
            },
            interval: {
                type: Number,
                default: 3000
            },
            speed: {
                type: Number,
                default: 500
            },
            auto: {
                type: Boolean,
                default: true
            },
            indicators: {
                default: 'center'
            },
            controlBtn: {
                type: Boolean,
                default: true
            },
            animation: {
                type: String,
                default: 'normal'
            },
            initIndex: {
                type: Number,
                default: 0,
            },
            currentIndex: {
                type: Number,
                default: -1
            },
            beforePrevious: {
                type: Function,
                default: () => true,
            },
            beforeNext: {
                type: Function,
                default: () => true,
            },
        },

        computed: {
            childrenLength() {
                return this.children.length
            },
        },

        methods: {
            updateItems() {
                this.children = this.$children.filter(child => {
                    return child.$options.name === 'easy-slider-item'
                })
                this.nowItemIndex = this.initIndex

                const nowItem = this.children[this.nowItemIndex]
                nowItem && nowItem.initItem()
                this.$nextTick(() => {
                    if (nowItem) {
                        this.handleSetTopItem(nowItem)
                        this.autoplay()
                    }
                })
            },
            handleSetTopItem(nextItem, prevItem) {
                if (nextItem && nextItem.$el) nextItem.$el.style.zIndex = 99
                if (prevItem && prevItem.$el) prevItem.$el.style.zIndex = 98
            },
            autoplay() {
                if (!this.auto || this.childrenLength < 2) return
                const self = this

                function setTimer() {
                    return setInterval(() => {
                        if (!self.auto) return
                        const nextIndex = (self.nowItemIndex + 1) % self.childrenLength
                        self.jump(nextIndex)
                    }, self.interval)
                }
                if (this.timer) clearInterval(this.timer)
                this.timer = setTimer()
            },
            jump(i) {
                const nowItem = this.children[this.nowItemIndex]
                const nextItem = this.children[i]
                const indexGap = i - this.nowItemIndex
                let direction = indexGap > 0
                if (indexGap === -(this.childrenLength - 1)) direction = true
                if (indexGap === this.childrenLength - 1) direction = false
                if (nowItem && nextItem) {
                    nowItem.hideHandle(direction)
                    nextItem.showHandle(direction)
                    this.nowItemIndex = i
                    this.$emit('changeSlide', { index: i });
                }
            },
            prev() {
                if (!this.beforePrevious()) return
                if (this.childrenLength < 2) return
                const nextIndex = this.nowItemIndex - 1 === -1 ? this.childrenLength - 1 : this.nowItemIndex - 1
                this.$emit('previous', { original: this.nowItemIndex, next: nextIndex });
                this.jump(nextIndex)
                this.autoplay()
            },
            next() {
                if (!this.beforeNext()) return
                if (this.childrenLength < 2) return
                const nextIndex = (this.nowItemIndex + 1) % this.childrenLength
                this.$emit('next', { original: this.nowItemIndex, next: nextIndex });
                this.jump(nextIndex)
                this.autoplay()
            },
            indicatorHandle(i) {
                if (this.childrenLength < 2) return
                if (i === this.nowItemIndex) return
                this.jump(i)
                this.autoplay()
            },
        },

        watch: {
            currentIndex(newIndex) {
                if (newIndex !== -1) {
                    this.jump(newIndex);
                }
            }
        },

        created() {
            this.handleItemChange = throttle(this.updateItems, 100)
            this.jump = debounce(this.jump, this.speed + 100)
        },

        beforeMount() {
            this.handleItemChange()
        },

        activated() {
            this.handleItemChange()
        },

        beforeDestroy() {
            this.timer && clearTimeout(this.timer)
        },

        deactivated() {
            this.timer && clearTimeout(this.timer)
        },
    });
});