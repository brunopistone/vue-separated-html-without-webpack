Vue.config.devtools = false;

window.Event = new class {
	constructor() {
		this.vue = new Vue();
	};

	fire(event, data = null) {
		this.vue.$emit(event, data);
	};

	listen(event, callback) {
		this.vue.$on(event, callback);
	};
};
Vue.component("aboutme", {
	template : `
		<div class="member-item">
			<div class="member-thumb">
				<img src="src/img/myphoto.jpg" alt="profile">
				<div class="overlay">
					<ul class="social-member">
						<li><a target="_blank" href="https://github.com/bp91" class="fa fa-github"></a></li>
						<li><a target="_blank" href="https://it.linkedin.com/pub/bruno-pistone/b9/169/954" class="fa fa-linkedin"></a></li>
					</ul>
				</div>
			</div>
			<div class="member-content">
				<h4>I'm on <a href="https://github.com/bp91" id="simple_link">Github</a> and <a href="https://it.linkedin.com/pub/bruno-pistone/b9/169/954" id="simple_link">LinkedIn</a>!</h4>
				<p>Check them out</p>
			</div>
		</div>
	`
})
Vue.component("cloudtags", {
	template : `
		<div class="tags">
            <ul>
                <li>
                    <span>
                        C
                    </span>
                </li>
                <li>
                    <span>
                        PHP
                    </span>
                </li>
                <li>
                    <span>
                        Python
                    </span>
                </li>
                <li>
                    <span>
                        Java
                    </span>
                </li>
                <li>
                    <span>
                        Spring MVC
                    </span>
                </li>
                <li>
                    <span>
                        Springboot
                    </span>
                </li>
                <li>
                    <span>
                        Jersey
                    </span>
                </li>
                <li>
                    <span>
                        HTML
                    </span>
                </li>
                <li>
                    <span>
                        CSS
                    </span>
                </li>
                <li>
                    <span>
                        Javascript
                    </span>
                </li>
                <li>
                    <span>
                        Node JS
                    </span>
                </li>
                <li>
                    <span>
                        JQuery
                    </span>
                </li>
                <li>
                    <span>
                        AngularJS
                    </span>
                </li>
                <li>
                    <span>
                        Vue JS
                    </span>
                </li>
                <li>
                    <span>
                        Swift
                    </span>
                </li>
                <li>
                    <span>
                        Docker
                    </span>
                </li>
                <li>
                    <span>
                        nginx
                    </span>
                </li>
                <li>
                    <span>
                        apache
                    </span>
                </li>
                <li>
                    <span>
                        unix
                    </span>
                </li>
                <li>
                    <span>
                        osx
                    </span>
                </li>
                <li>
                    <span>
                        SQL
                    </span>
                </li>
                <li>
                    <span>
                        Postgresql
                    </span>
                </li>
                <li>
                    <span>
                        Oracle
                    </span>
                </li>
                <li>
                    <span>
                        REST
                    </span>
                </li>
                <li>
                    <span>
                        git
                    </span>
                </li>
                <li>
                    <span>
                        mercurial
                    </span>
                </li>
                <li>
                    <span>
                        Jenkins
                    </span>
                </li>
                <li>
                    <span>
                        Salesforce
                    </span>
                </li>
            </ul>
        </div>
	`
})
Vue.component("customslider", {
	template : `
		<div class="slider-content">
			<slider animation="fade">
			  <slider-item v-for="(image, index) in list" :key="index">
			    <div class="image-container">
			      <img class="mySlides" :src="image.src">
			      <div class="centered">
			      	<h2>{{image.title}}</h2>
			      	<p>{{image.content}}</p>
			      </div>
			    </div>
			  </slider-item>
			</slider>
		</div>
	`,
	data() {
		return {
			"list" : [
				{
					"src" : "src/img/code.jpg",
					"title" : "Software Developer",
					"content" : "I have a large interest in programming and I love to apply my skills to my personal projects. Fond of data engineering, full stack development and machine learning" 
				},
				{
					"src" : "src/img/calcio.jpg",
					"title" : "Sport fun",
					"content" : "I played football since I was 5 years old to 18. Actually I'm a follower of football, tennis and basket"
				},
				{
					"src" : "src/img/collage.png",
					"title" : "Life lover",
					"content" : "I spend my free time with my friends, that are really my life. I like going out to know new people, drink gin tonics and have fun"
				}
			]
		}
	}
})
Vue.component("endfooter", {
	template : `
		<div class="first-footer">
			<ul>
				<li>
					<a href="https://it.linkedin.com/pub/bruno-pistone/b9/169/954" class="fa fa-linkedin"></a>
				</li>
				<li>
					<a href="https://github.com/bp91" class="fa fa-github"></a>
				</li>
				<li>
					<a href="https://www.facebook.com/bruno.pistone1991" class="fa fa-facebook"></a>
				</li>
			</ul>
		</div>
	`
})
Vue.component("leftbar", {
	template : `
		<div class="row hide-leftmenu">
			<div class="col-xs-12">
				<nav class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
			        <ul class="nav sidebar-nav">
			        	<li id="description-li">
			        		<div class="description-container">
			        			<div class="row">
			        				<div class="col-xs-1">
			        				</div>
			        				<div class="col-xs-10">
			        					<span id="name">
			        						Bruno Pistone
			        					</span>
			        				</div>
			        				<div class="col-xs-1">
			        				</div>
			        			</div>
			        			<div class="row">
			        				<div class="col-xs-1">
			        				</div>
			        				<div class="col-xs-10">
			        					<span id="subtitle">
			        						Welcome to my portfolio website
			        					</span>
			        				</div>
			        				<div class="col-xs-1">
			        				</div>
			        			</div>
							</div>
			        	</li>
			            <li class="menu-li">
			                <a id="aboutme" @click="scrollMeTo('about')">ABOUT ME</a>
			            </li>
			            <li class="menu-li">
			                <a id="skill" @click="scrollMeTo('skills')">SKILLS</a>
			            </li>
			            <li class="menu-li">
			                <a id="myresume" @click="scrollMeTo('resume')">RESUME</a>
			            </li>
			            <li class="menu-li">
			                <a id="contacts" @click="scrollMeTo('contact')">CONTACT</a>
			            </li>
			        </ul>
			    </nav>
			</div>
		</div>
	`,
	data() {
		return {
			isVisible : true
		};
	},
	methods : {
		scrollMeTo(refName) {
			var reqId = "#"+refName;
			window.scrollTo(0, $(reqId).offset().top-85);
		}
	}
})
Vue.component("googlemap", {
	template : `
		<div class="google-map" :id="mapName"></div>
	`,
	name : "googlemap",
	data() {
		return {
			mapName: this.name + "-map"
		};
	},
	mounted: function () {
		const element = document.getElementById(this.mapName)
		const options = {
			zoom: 14,
			center: new google.maps.LatLng(45.4641013,9.1897378)
		}
		const map = new google.maps.Map(element, options);
	}
})
var parseWidth = function (el) {
  var styles = getComputedStyle(el)
  var widthText = styles.width
  return parseFloat(widthText)
}

var negateIf = (val, condition) => condition ? -val : val;

var animate = function (speed, rule, callback) {
  var animation = new Animator(speed, rule)
  animation.animate(callback)
}

var animation = {
  normal: {
    beforeEnter (vm, el) {
      let width = negateIf(parseWidth(el), !vm.direction)
      el.style.transform = `translateX(${width}px)`
    },
    enter (vm, el, callback) {
      var width = negateIf(parseWidth(el), !vm.direction)
      animate(vm.speed, (p) => {
        el.style.transform = `translateX(${ width - width * p }px)`
      }, callback)
    },
    leave (vm, el, callback) {
      var width = negateIf(parseWidth(el), vm.direction)
      animate(vm.speed, (p) => {
        el.style.transform = `translateX(${ width * p }px)`
      }, callback)
    },
  },
  fade: {
    beforeEnter (vm, el) {
      el.style.opacity = 0
      el.style.transform = `translateX(${vm.direction ? '10px' : '-10px'})`
    },
    enter (vm, el, callback) {
      var translate = vm.direction ? 10 : -10
      animate(vm.speed, (p) => {
        el.style.opacity = p
        el.style.transform = `translateX(${ translate - translate * p }px)`
      }, callback)
    },
    leave (vm, el, callback) {
      var translate = vm.direction ? -10 : 10
      animate(vm.speed, (p) => {
        el.style.opacity = 1 - p
        el.style.transform = `translateX(${ translate * p }px)`
      }, callback)
    },
  },
}

Vue.component("slider-item", {
	template : `
		<div class="slider-item" v-if="show" @click="onClick">
		    <transition
		      :css="false"
		      @beforeEnter="beforeEnter"
		      @enter="enter"
		      @leave="leave">
		      <div class="wrap" v-if="animate">
		        <slot></slot>
		      </div>
		    </transition>
		  </div>
	`,
	name: 'easy-slider-item',

  data () {
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
    beforeEnter (el) {
      animation[this.animation].beforeEnter(this, el)
    },
    enter (el, done) {
      animation[this.animation].enter(this, el, done)
    },
    leave (el, done) {
      animation[this.animation].leave(this, el, () => {
        done()
        this.show = false
      })
    },
    showHandle (direction) {
      this.direction = direction
      this.show = true
      this.$nextTick(() => this.animate = true)
    },
    hideHandle (direction) {
      this.direction = direction
      this.animate = false
    },
    initItem () {
      this.animate = true
      this.show = true
    },
  },

  created () {
    this.$parent.handleItemChange()
    this.speed = this.$parent.speed
    this.animation = this.$parent.animation
  },
})
Vue.component("slider", {
	template : `
		<div :style="{ width: width, height: height }" class="slider">
		    <div class="items">
		      <slot></slot>
		    </div>
		    <div :class="\`indicators indi-\${ indicators }\`" @click.stop v-if="indicators">
		      <span
		      :key="i"
		      :class="{ 'slider-indicator-active': nowItemIndex === i - 1 }"
		      @click="indicatorHandle(i - 1)"
		      v-for="i in childrenLength" class="slider-indicator-icon"></span>
		    </div>
		    <button @click.stop="prev" v-if="controlBtn" class="btn btn-left">
		      <i class="slider-icon slider-icon-left"></i>
		    </button>
		    <button @click.stop="next" v-if="controlBtn" class="btn btn-right">
		      <i class="slider-icon slider-icon-right"></i>
		    </button>
		  </div>
	`,
	data () {
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
      childrenLength () {
        return this.children.length
      },
    },

    methods: {
      updateItems () {
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
      handleSetTopItem (nextItem, prevItem) {
        if (nextItem && nextItem.$el) nextItem.$el.style.zIndex = 99
        if (prevItem && prevItem.$el) prevItem.$el.style.zIndex = 98
      },
      autoplay () {
        if (!this.auto || this.childrenLength < 2) return
        const self = this
        function setTimer () {
          return setInterval(() => {
            if(!self.auto) return
            const nextIndex = (self.nowItemIndex + 1) % self.childrenLength
            self.jump(nextIndex)
          }, self.interval)
        }
        if (this.timer) clearInterval(this.timer)
        this.timer = setTimer()
      },
      jump (i) {
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
      prev () {
        if (!this.beforePrevious()) return
        if (this.childrenLength < 2) return
        const nextIndex = this.nowItemIndex - 1 === -1 ? this.childrenLength - 1 : this.nowItemIndex - 1
        this.$emit('previous', { original: this.nowItemIndex, next: nextIndex });
        this.jump(nextIndex)
        this.autoplay()
      },
      next () {
        if (!this.beforeNext()) return
        if (this.childrenLength < 2) return
        const nextIndex = (this.nowItemIndex + 1) % this.childrenLength
        this.$emit('next', { original: this.nowItemIndex, next: nextIndex });
        this.jump(nextIndex)
        this.autoplay()
      },
      indicatorHandle (i) {
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

    created () {
      this.handleItemChange = throttle(this.updateItems, 100)
      this.jump = debounce(this.jump, this.speed + 100)
    },

    beforeMount () {
      this.handleItemChange()
    },

    activated () {
      this.handleItemChange()
    },

    beforeDestroy () {
      this.timer && clearTimeout(this.timer)
    },

    deactivated () {
      this.timer && clearTimeout(this.timer)
    },
})
Vue.component("topmenu", {
	template : `
		<div class="responsive-navigation">
	        <a class="menu-toggle-btn" @click="showHide()">
		    	<i class="fa fa-bars fa-2x"></i>
	        </a>
	        <div class="navigation responsive-menu" :class="{ showdropdown: navmenu }">
	            <ul>
	            	<li class="about">
		                <a @click="scrollMeTo('about')">ABOUT ME</a>
		            </li>
		            <li class="skills">
		                <a @click="scrollMeTo('skills')">SKILLS</a>
		            </li>
		            <li class="portfolio">
		                <a @click="scrollMeTo('resume')">RESUME</a>
		            </li>
		            <li class="contact">
		                <a @click="scrollMeTo('contact')">CONTACT</a>
		            </li>
	            </ul>
	        </div>
	    </div>
	`,
	data() {
		return {
			"navmenu" : false
		};
	},
	methods : {
		scrollMeTo(refName) {
			var reqId = "#"+refName;
			window.scrollTo(0, $(reqId).offset().top-85);
		},
		showHide() {
			this.navmenu = !this.navmenu;
		}
	}
})