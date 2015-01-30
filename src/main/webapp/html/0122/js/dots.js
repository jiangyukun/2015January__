/**
 * menu.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
;
(function (window) {
    'use strict';
    function extend(a, b) {
        for (var key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key];
            }
        }
        return a;
    }

    function DotNav(el, options) {
        this.nav = el;
        this.current = 0;
        this.dots = [].slice.call(this.nav.querySelectorAll('li'));
        this.hop = this.nav.parentNode.className.indexOf('dotstyle-hop') !== -1;
        var self = this;
        this.setSelect = function (index) {
            var dot = self.dots[index];
            if (index !== self.current) {
                self.dots[self.current].className = '';
                if (self.hop && index < self.current) {
                    dot.className += ' current-from-right';
                }
                setTimeout(function () {
                    dot.className += ' current';
                    self.current = index;
                    if (typeof self.options.callback === 'function') {
                        self.options.callback(self.current);
                    }
                }, 25);
            }
        };
        this.options = extend({}, this.options);
        extend(this.options, options);
        this._init();
        return this;
    }

    DotNav.prototype.options = {};
    DotNav.prototype._init = function () {
    };
    window.DotNav = DotNav;
})(window);
