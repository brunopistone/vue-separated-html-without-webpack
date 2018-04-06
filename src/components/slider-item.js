define(function(require) {
    let Vue = require("js/vue");

    let template = require("src/js/text.js!html/slider-item.html");

    var parseWidth = function(el) {
        var styles = getComputedStyle(el)
        var widthText = styles.width
        return parseFloat(widthText)
    }

    var negateIf = (val, condition) => condition ? -val : val;

    var animate = function(speed, rule, callback) {
        var animation = new Animator(speed, rule)
        animation.animate(callback)
    }

    var animation = {
        normal: {
            beforeEnter(vm, el) {
                let width = negateIf(parseWidth(el), !vm.direction)
                el.style.transform = `translateX(${width}px)`
            },
            enter(vm, el, callback) {
                var width = negateIf(parseWidth(el), !vm.direction)
                animate(vm.speed, (p) => {
                    el.style.transform = `translateX(${ width - width * p }px)`
                }, callback)
            },
            leave(vm, el, callback) {
                var width = negateIf(parseWidth(el), vm.direction)
                animate(vm.speed, (p) => {
                    el.style.transform = `translateX(${ width * p }px)`
                }, callback)
            },
        },
        fade: {
            beforeEnter(vm, el) {
                el.style.opacity = 0
                el.style.transform = `translateX(${vm.direction ? '10px' : '-10px'})`
            },
            enter(vm, el, callback) {
                var translate = vm.direction ? 10 : -10
                animate(vm.speed, (p) => {
                    el.style.opacity = p
                    el.style.transform = `translateX(${ translate - translate * p }px)`
                }, callback)
            },
            leave(vm, el, callback) {
                var translate = vm.direction ? -10 : 10
                animate(vm.speed, (p) => {
                    el.style.opacity = 1 - p
                    el.style.transform = `translateX(${ translate * p }px)`
                }, callback)
            },
        },
    }

    Vue.component("slider-item", {
        template: template,
        name: 'easy-slider-item',
        data() {
            return {
                animate: false,
                direction: 0,
                speed: 0,
                show: false,
                animation: '',
            }
        },

        props: {
            onClick: {
                type: Function,
                default () {},
            },
        },

        methods: {
            beforeEnter(el) {
                animation[this.animation].beforeEnter(this, el)
            },
            enter(el, done) {
                animation[this.animation].enter(this, el, done)
            },
            leave(el, done) {
                animation[this.animation].leave(this, el, () => {
                    done()
                    this.show = false
                })
            },
            showHandle(direction) {
                this.direction = direction
                this.show = true
                this.$nextTick(() => this.animate = true)
            },
            hideHandle(direction) {
                this.direction = direction
                this.animate = false
            },
            initItem() {
                this.animate = true
                this.show = true
            },
        },

        created() {
            this.$parent.handleItemChange()
            this.speed = this.$parent.speed
            this.animation = this.$parent.animation
        }
    });
});