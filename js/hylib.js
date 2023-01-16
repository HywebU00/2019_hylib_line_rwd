//固定dialog視窗在螢幕正中間
jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    return this;
}
$(window).load(function(){
    $(".dialog").center();
});
$(window).resize(function(){
    $(".dialog").center();
});
//計算白底長度
jQuery.fn.hheight = function () {
    this.css("min-height", Math.max(0, ($(window).height() - 142)) + "px");
    return this;
}
$(window).load(function(){
    $(".library").hheight();
});
$(window).resize(function(){
    $(".library").hheight();
});

//切換帳號
$(function(){
    $(".dialog,.overlay").hide();
    $(".switch-menber").click(function(){
        $("#id-dialog,.overlay").fadeIn();
        $( ".wrap" ).addClass("blur");
    })
    $(".overlay,.dialog-close").click(function(){
        $("#id-dialog,.overlay").fadeOut();
        $( ".wrap" ).removeClass("blur");
    })
    $(".alert-time").click(function(){
        $("#alert-dialog,.overlay").fadeIn();
        $( ".wrap" ).addClass("blur");
    })
    $(".overlay,.dialog-close").click(function(){
        $("#alert-dialog,.overlay").fadeOut();
        $( ".wrap" ).removeClass("blur");
    })
})
$(function(){
    $(".menber-list li").click(function(){
        $(".menber-list li").removeClass('active');
        $(this).addClass('active');
    })
    $(".alert-list li").click(function(){
        $(".alert-list li").removeClass('active');
        $(this).addClass('active');
    })
})

//切換搜尋框
$(function(){
    $(".nav-function .search-book").click(function(){
        $(this).toggleClass('active');
        $(".search-box").slideToggle();
    })
})


//回到網頁頂端
$(function(){
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 200){
            $('#gotop').addClass("active");
        } else {
            $('#gotop').removeClass("active");
        }
    });
    $("#gotop").click(function(){
        $("html,body").animate({scrollTop:0},900);
        return false;
    })
})
//書籍輪播
$(function(){
    $('.book-slide').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 7,
        responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5
            }
        },
        {
            breakpoint: 980,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
        ]
    });
})

//閱讀指數－年
$(function(){
    $('.year-slide').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
            }
        },
        {
            breakpoint: 980,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }
        ]
    });
})

//選單fixed
$(function() {
    var _top = $('header').outerHeight();
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if( scroll > 0){
            $('.library').css('padding-top', _top+"px");
            $('.library').siblings("header").addClass("fixed-header");
            // $('.mobile-card').css('padding-top', "64px");
            // $('.mobile-card').siblings("header").addClass("fixed-header");
        }else{
            $('.library').css('padding-top', "20px");
            $('.library').siblings("header").removeClass("fixed-header")
            // $('.mobile-card').css('padding-top', "20px");
            // $('.mobile-card').siblings("header").removeClass("fixed-header")
        }
    });
});
