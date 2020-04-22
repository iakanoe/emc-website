$(document).ready(function() {
    var nav = $('nav');
    var navHeight = nav.outerHeight() + 15;
    var menuItems = nav.find('ul').find('a');

    scrollItems = menuItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

    $(window).on('scroll', function() {
        if ($(window).scrollTop()) {
            $('nav').addClass('scrolling');
            $('#logo').attr('src', 'res/vector/logo_full.svg');
        } else {
            $('nav').removeClass('scrolling');
            $('#logo').attr('src', 'res/vector/logo_simple.svg');
        }

        var fromTop = $(this).scrollTop() + navHeight;
        var cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop)
                return this;
        });
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#" + id + "']").parent().addClass("active");
    });

    $(document).on('click', 'a[href^="#"]', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 80
        }, 600);
    });
});
