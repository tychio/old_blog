(function (undefined) {
    'use strict';
    //nav
    var list = document.getElementById('list');
    list.onclick = function () {
        var _nav = document.getElementsByTagName('nav')[0];
        var _main = document.getElementsByTagName('main')[0];
        if (_nav.offsetHeight == 0) {
            var _link = _nav.getElementsByTagName('a');
            var _height = _link.length * _link[0].offsetHeight;
            _nav.style.height = _height + 'px';
            _main.style.paddingTop = _height + 'px'
        } else {
            _nav.style.height = '0px';
            _main.style.paddingTop = '0px';
        }
    };
    //backtop
    function scrollTop (p_top) {
        var body = document.body;
        if (typeof body.scrollTop == 'undefined' || body.scrollTop == 0) {
            body = document.documentElement;
        }
        if (p_top < 0) {
            p_top = 0;
        }
        if (p_top !== undefined && !isNaN(p_top - 0)) {
            body.scrollTop = p_top;
        } else {
            return body.scrollTop;
        }
    }
    var backtop = document.getElementById('backtop');
    var interval = 0;
    window.onscroll = function () {
        var _top = scrollTop();
        if (_top > 400) {
            backtop.style.display = 'block';
        } else {
            backtop.style.display = 'none';
        }
    };
    backtop.onclick = function (p_event) {
        interval = setInterval(function () {
            var _top = scrollTop();
            scrollTop(_top - 300);
            if (_top <= 0) {
                scrollTop(0);
                clearInterval(interval);
            }
        }, 50);
        p_event.preventDefault ? p_event.preventDefault() : event.returnValue =   false;
    };
    //annyang
    /*if (annyang) {
      var commands = {
        'back up': function () {
          scrollTop(0);
        },
        'up': function () {
          scrollTop(scrollTop() - 400);
        },
        'down': function () {
          scrollTop(scrollTop() + 400);
        },
        'go to *page': function (p_page) {
          if (p_page === 'tech') {
            p_page = 'technology';
          } else if (p_page === 'home') {
            p_page = 'index';
          }
          window.location.href = '/' + p_page + '.html';
        }
      };
      annyang.init(commands);
      annyang.start();
    }*/
})();
//ga
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-40505829-1', 'tychio.net');
ga('send', 'pageview');