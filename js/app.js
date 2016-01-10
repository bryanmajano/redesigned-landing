$(document).ready(function () {

    /* default settings */
    $('.venobox').venobox();


    /* custom settings */
    $('.venobox_custom').venobox({
        framewidth: '', // default: ''
        frameheight: '', // default: ''
        border: '0px', // default: '0'
        bgcolor: '#fff', // default: '#fff'
        titleattr: '', // default: 'title'
        numeratio: false, // default: false
        infinigall: false            // default: false
    });

    /* auto-open #firstlink on page load */
    $("#firstlink").venobox().trigger('click');

    setTimeout(function () {
        $('.animate-fast-down').toggleClass('hidden-elem');
        $('.animate-fast-down').addClass('animated slideInDown');
    }, 150);

    setTimeout(function () {
        $('.animate-fast-up').toggleClass('hidden-elem');
        $('.animate-fast-up').addClass('animated slideInUp');
    }, 150);

    setTimeout(function () {
        $('.animate-slow').toggleClass('hidden-elem');
        $('.animate-slow').addClass('animated fadeIn');
    }, 1500);
});

$(window).load(function () {
    var container = $("#diff-container");
    container.twentytwenty();

    var beforeImg = container.find("img:first");
    var slider = container.find(".twentytwenty-handle");
    var sliderOrientation = 'horizontal';

    var calcOffset = function (dimensionPct) {
        var w = beforeImg.width();
        var h = beforeImg.height();
        return {
            w: w + "px",
            h: h + "px",
            cw: (dimensionPct * w) + "px",
            ch: (dimensionPct * h) + "px"
        };
    };

    var adjustContainer = function (offset) {
        if (sliderOrientation === 'vertical') {
            beforeImg.css("clip", "rect(0," + offset.w + "," + offset.ch + ",0)");
        } else {
            beforeImg.css("clip", "rect(0," + offset.cw + "," + offset.h + ",0)");
        }
        container.css("height", offset.h);
    };

    var adjustSlider = function (pct) {
        var offset = calcOffset(pct);
        slider.css((sliderOrientation === "vertical") ? "top" : "left", (sliderOrientation === "vertical") ? offset.ch : offset.cw);
        adjustContainer(offset);
    }

    current = 0.9;
    diff = 0.005;
    var transitionSlider = function () {
        setTimeout(function () {
            current = current - diff;
            adjustSlider(current);
            if (current > 0.3) {
                transitionSlider();
            }
        }, 7);
    }

    var editPic = true;

    var container = $("#diff-container");
    var target = container.offset().top + 200;
    timeout = null;

    $(window).scroll(function () {
        if (!timeout) {
            timeout = setTimeout(function () {
                console.log('scroll');
                clearTimeout(timeout);
                timeout = null;
                if ($(window).scrollTop() + $(window).height() >= target && editPic) {
                    editPic = false;
                    transitionSlider();
                }
            }, 250);
        }
    });
});

$('#signupButton').on('click', function (e) {
//    e.preventDefault();
    $("#signupAlert").show();

})