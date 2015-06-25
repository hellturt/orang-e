+function(t){"use strict";function i(i){this.$pins=i,this.tasks=[],this.timerId=null,this.deferred=new t.Deferred}function e(t){this.img=t,this.initialWidth=t.width,this.initialHeight=t.height}function n(i){return this.each(function(){var e=t(this),n=e.data("mystist.waterfall"),s="object"==typeof i&&i;n&&"string"!=typeof i&&n.destroy()&&(n=null),n||e.data("mystist.waterfall",n=new o(this,s)),"string"==typeof i&&n[i]()})}var s=s||{now:Date.now||function(){return(new Date).getTime()},throttle:function(t,i,e){var n,o,r,a=null,h=0;e||(e={});var l=function(){h=e.leading===!1?0:s.now(),a=null,r=t.apply(n,o),a||(n=o=null)};return function(){var u=s.now();h||e.leading!==!1||(h=u);var c=i-(u-h);return n=this,o=arguments,0>=c||c>i?(a&&(clearTimeout(a),a=null),h=u,r=t.apply(n,o),a||(n=o=null)):a||e.trailing===!1||(a=setTimeout(l,c)),r}},debounce:function(t,i,e){var n,o,r,a,h,l=function(){var u=s.now()-a;i>u&&u>=0?n=setTimeout(l,i-u):(n=null,e||(h=t.apply(r,o),n||(r=o=null)))};return function(){r=this,o=arguments,a=s.now();var u=e&&!n;return n||(n=setTimeout(l,i)),u&&(h=t.apply(r,o),r=o=null),h}}},o=function(i,e){this.$element=t(i),this.options=t.extend({},o.DEFAULTS,e),this.id=Math.random().toString().slice(2),this.$fakePin=null,this.$container=null,this.$pins=null,this.pinWidth=null,this.imgWidth=null,this.lefts=[],this.tops=[],this.init().calculateWidth().calculatePosition().sail(),t(window).on("resize.mystist.waterfall"+this.id,s.debounce(t.proxy(function(){t(window).off("scroll.mystist.waterfall"+this.id),this.calculateWidth().calculatePosition().ship(r.getLoadedPins.call(this))},this),777))};o.VERSION="0.2.2",o.DEFAULTS={},o.prototype.init=function(){return this.initPins().initAttributes(),this},o.prototype.initPins=function(){var i=this.$element.children().length>0?this.$element.children().remove():t(this.$element.data("bootstrap-waterfall-template"));return i.each(function(){var i=t(this).find("img:eq(0)");i.length>0&&(t(this).data("bootstrap-waterfall-src",i.attr("src")),i.attr("src","data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="))}),this.$pins=i,this},o.prototype.initAttributes=function(){return this.$fakePin=this.$pins.first().clone(),this.$container=t("<div />").css("position","relative"),this.$element.html(this.$container),this},o.prototype.calculateWidth=function(){var t=this.$fakePin.clone();return this.$container.append(t.css("opacity",0)),this.pinWidth=t.outerWidth(!0),this.imgWidth=t.find("img:eq(0)").css("width","100%").width(),t.remove(),this},o.prototype.calculatePosition=function(){for(var t=parseInt(this.$container.width()/this.pinWidth,10),i=[],e=[],n=0;t>n;n++)i.push(n*this.pinWidth),e.push(0);return this.lefts=i,this.tops=e,this},o.prototype.sail=function(){var e=r.getToLoadPins.call(this),n=new i(e);return n.load().run().deferred.done(t.proxy(function(){this.ship(e)},this)),this},o.prototype.ship=function(i){return this.render(i).updateHeight(),t(window).on("scroll.mystist.waterfall"+this.id,s.throttle(t.proxy(function(){r.isWantMore.call(this)&&(t(window).off("scroll.mystist.waterfall"+this.id),this.sail())},this),500)),this},o.prototype.render=function(i){var e=this;return i.each(function(){e.placePin(t(this))}),this},o.prototype.placePin=function(t){var i=a.indexOf(this.tops,Math.min.apply(null,this.tops)),e=r.getPosition.call(this,i);return t.css({position:"absolute",left:e.left,top:e.top}),t.data("bootstrap-waterfall-pin")&&r.setImageHeight.call(this,t),t.data("bootstrap-waterfall-src")&&(r.makeImageAvailable.call(this,t),t.removeData("bootstrap-waterfall-src")),this.$container.append(t),r.updatePosition.call(this,i,t),this},o.prototype.updateHeight=function(){var t=a.indexOf(this.tops,Math.max.apply(null,this.tops));return this.$container.height(this.tops[t]),this},o.prototype.destroy=function(){return t(window).off("scroll.mystist.waterfall"+this.id),t(window).off("resize.mystist.waterfall"+this.id),this.$element.empty().removeData("mystist.waterfall"),this};var r={getToLoadPins:function(){var i=parseInt(this.$container.width()/this.pinWidth,10),e=3*i,n=this.$pins.map(function(){return t(this).find("img").length>0&&t(this).data("bootstrap-waterfall-src")?t(this):void 0});return n.slice(0,e)},getLoadedPins:function(){var i=this.$pins.map(function(){return t(this).find("img").length>0&&!t(this).data("bootstrap-waterfall-src")?t(this):void 0});return i},isWantMore:function(){return t(window).scrollTop()+t(window).height()>a.getDocHeight()-377?!0:!1},getPosition:function(t){var i={left:this.lefts[t],top:this.tops[t]};return i},setImageHeight:function(t){var i=t.data("bootstrap-waterfall-pin"),e=this.imgWidth*i.img.height/i.img.width;t.find("img:eq(0)").css({height:e,width:"auto"})},makeImageAvailable:function(t){t.find("img:eq(0)").attr("src",t.data("bootstrap-waterfall-src"))},updatePosition:function(t,i){this.tops[t]+=i.outerHeight(!0)}};i.prototype.load=function(){var i=this;return this.$pins.each(function(){var n=new Image;n.src=t(this).data("bootstrap-waterfall-src");var s=new e(n);i.tasks.push(s),t(this).data("bootstrap-waterfall-pin",s)}),this},i.prototype.run=function(){return this.timerId=setInterval(t.proxy(function(){this.isDone()?this.stop():this.check()},this),40),this},i.prototype.isDone=function(){return 0===this.tasks.length?!0:!1},i.prototype.stop=function(){clearInterval(this.timerId),this.timerId=null,this.deferred.resolve()},i.prototype.check=function(){for(var t=0;t<this.tasks.length;t++){var i=this.tasks[t];i.isLoaded()&&this.tasks.splice(t--,1)}},e.prototype.isLoaded=function(){return this.img.width!==this.initialWidth||this.img.height!==this.initialHeight||this.img.width*this.img.height>1024?!0:!1};var a={getDocHeight:function(){var t=document;return Math.max(t.body.scrollHeight,t.documentElement.scrollHeight,t.body.offsetHeight,t.documentElement.offsetHeight,t.body.clientHeight,t.documentElement.clientHeight)},indexOf:function(t,i){if(null==t)return-1;for(var e=0,n=t.length;n>e;e++)if(t[e]===i)return e;return-1}},h=t.fn.waterfall;t.fn.waterfall=n,t.fn.waterfall.Constructor=o,t.fn.waterfall.noConflict=function(){return t.fn.waterfall=h,this}}(jQuery);