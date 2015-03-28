var lazyLoading = (function() {

    var pages;
    var currentPage = 0;

    function initFunc() {
        document.onmousewheel = yHandler;
    }

    function yHandler() {

        var wrap = document.getElementById('wrap');
        var contentHeight = wrap.offsetHeight;
        var yOffset = window.pageYOffset;
        var y = yOffset + window.innerHeight;

        if (pages && currentPage < pages.length && y >= contentHeight) {
            wrap.innerHTML += '<div class="newData' + currentPage + '"></div>';

            // leverage jQuery to load the page
            console.log('try to load ' + pages[currentPage]);
            $('newData' + currentPage).load(pages[currentPage]);
            currentPage++;

        } else {
            console.log('y = ' + y);
            console.log('contentHeight = ' + contentHeight);
        }

        var status = document.getElementById('status');
        status.innerHTML = contentHeight + " | " + y;
    }

    function initPages(page_list) {
        pages = page_list;
    }

}());

window.onscroll = lazyLoading.yHandler;
window.onload = lazyLoading.initFunc;
