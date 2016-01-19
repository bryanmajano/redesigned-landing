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
    
    setTimeout(function () {
//        $('.animate-arrow-up').toggleClass('hidden-elem');
//        $('.animate-arrow-up').addClass('animated slideInUp');
    }, 1500);
    
//    $('.animate-arrow-up').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationEnd animationend', 
//        $('.animate-arrow-up').removeClass('slideInUp'));
        
    
    var getQueryString = function ( field, url ) {
        var href = url ? url : window.location.href;
        var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
        var string = reg.exec(href);
        return string ? string[1] : null;
    };
    
    if (getQueryString('success', window.location.href) == 1) {
        $("#signupAlert").show();
    }
    else if (getQueryString('success', window.location.href) == 0) {
        $("#signupWarning").show();
    }
});

$(window).load(function () {
    var container = $("#diff-container");
    var result = container.twentytwenty({default_offset_pct: 0.9});

    console.log(result);
    current = 0.9;
    diff = 0.005;
    var transitionSlider = function () {
        setTimeout(function () {
            current = current - diff;
            container.move(current);
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

$(window).scroll(function(){});

$(document).on('submit', '#reg-form', function() {  
    var email = $('#email').val();
    if (email) {
        $.post('includes/signup.php', $(this).serialize(), function(data) {
            $("#signupAlert").show();
            $('#email').val("");
        });
    } else {
        $("#signupWarning").show();
    }
    return false;
  
 });