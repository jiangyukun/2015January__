(function () {
    'use strict';
    var i, div, ul, li, a, pages, size;
    pages = document.querySelectorAll('[data-role=rtIntroducePages]')[0];
    size = pages.querySelectorAll('div').length;
    div = document.createElement('div');
    ul = document.createElement('ul');
    div.className = 'dotstyle dotstyle-scaleup dots';
    for (i = 1; i <= size; i++) {
        li = document.createElement('li');
        if (i == 1) {
            li.className = 'current';
        }
        a = document.createElement('a');
        a.href = '#';
        li.appendChild(a);
        ul.appendChild(li);
    }
    div.appendChild(ul);
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(div);
    var scrollImg = document.createElement('img');
    scrollImg.className = 'arrow-up pt-page-moveIconUp';
    scrollImg.src= 'img/icon_up.png';
    body.appendChild(scrollImg);

    var dots = new DotNav(document.querySelectorAll('.dots > ul')[0]);

    window.onload = function () {
        $('#loading').hide();
    };

    $('#js-btn-share').bind('tap', function () {
        $('#js-share').show();
    });
    $('#js-share').bind('tap', function () {
        $(this).hide();
    });

    var pageIndex = 1,
        pageTotal = $('.page').length,
        towards = {up: 1, right: 2, down: 3, left: 4},
        isAnimating = false;

    document.addEventListener('touchmove', function (event) {
        event.preventDefault();
    }, false);

    $(document).swipeUp(function () {
        if (isAnimating) return;
        if (pageIndex < pageTotal) {
            pageIndex += 1;
        } else {
            pageIndex = 1;
        }
        pageMove(towards.up);
        dots.setSelect(pageIndex - 1);
    });

    $(document).swipeDown(function () {
        if (isAnimating) return;
        if (pageIndex > 1) {
            pageIndex -= 1;
        } else {
            pageIndex = pageTotal;
        }
        pageMove(towards.down);
        dots.setSelect(pageIndex - 1);
    });

    function pageMove(tw) {
        var lastPage;
        if (tw == '1') {
            if (pageIndex == 1) {
                lastPage = ".page-" + pageTotal;
            } else {
                lastPage = ".page-" + (pageIndex - 1);
            }
        } else if (tw == '3') {
            if (pageIndex == pageTotal) {
                lastPage = ".page-1";
            } else {
                lastPage = ".page-" + (pageIndex + 1);
            }
        }

        var nowPage = ".page-" + pageIndex, outClass, inClass;

        switch (tw) {
            case towards.up:
                outClass = 'pt-page-moveToTop';
                inClass = 'pt-page-moveFromBottom';
                break;
            case towards.down:
                outClass = 'pt-page-moveToBottom';
                inClass = 'pt-page-moveFromTop';
                break;
        }
        isAnimating = true;
        $(nowPage).removeClass("hide");

        $(lastPage).addClass(outClass);
        $(nowPage).addClass(inClass);

        setTimeout(function () {
            $(lastPage).removeClass('page-current');
            $(lastPage).removeClass(outClass);
            $(lastPage).addClass("hide");
            $(lastPage).find("img").addClass("hide");

            $(nowPage).addClass('page-current');
            $(nowPage).removeClass(inClass);
            $(nowPage).find("img").removeClass("hide");

            isAnimating = false;
        }, 600);
    }

})();