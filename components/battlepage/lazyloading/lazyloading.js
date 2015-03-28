var lazyLoading = (function() {

    var pages;
    var currentPage = 0;

    return {

        yHandler: function() {

            var wrap = document.getElementById('wrap');
            var contentHeight = wrap.offsetHeight;
            var yOffset = window.pageYOffset;
            var y = yOffset + window.innerHeight;

            if (pages && currentPage < pages.length && y >= contentHeight) {
                if ($('#newData' + currentPage).size() <= 0) {
                    wrap.innerHTML += '<div id="newData' + currentPage + '"></div>';

                    // leverage jQuery to load the page
                    console.log('try to load ' + pages[currentPage]);
                    $('#newData' + currentPage).load(pages[currentPage], function() {
                        currentPage++;
                    });
                }
            } else {
                console.log('y = ' + y);
                console.log('contentHeight = ' + contentHeight);
            }

            var status = document.getElementById('status');
            status.innerHTML = contentHeight + " | " + y;
        },

        initFunc: function() {
            document.onmousewheel = self.yHandler;
        },

        initPages: function(page_list) {
            pages = page_list;
        }
    };

})();

$(document).ready(function() {
    window.onscroll = lazyLoading.yHandler;
    //window.onload = lazyLoading.initFunc;
    document.onmousewheel = lazyLoading.yHandler;
}
);
