$(document).ready(function(){

    /* default settings */
    $('.venobox').venobox(); 


    /* custom settings */
    $('.venobox_custom').venobox({
        framewidth: '',        // default: ''
        frameheight: '',       // default: ''
        border: '0px',             // default: '0'
        bgcolor: '#fff',         // default: '#fff'
        titleattr: '',    // default: 'title'
        numeratio: false,            // default: false
        infinigall: false            // default: false
    });

    /* auto-open #firstlink on page load */
    $("#firstlink").venobox().trigger('click');
    
    setTimeout(function() {
        $('.animate-fast-down').toggleClass('hidden-elem');
        $('.animate-fast-down').addClass('animated slideInDown');
    }, 150);
    
    setTimeout(function() {
        $('.animate-fast-up').toggleClass('hidden-elem');
        $('.animate-fast-up').addClass('animated slideInUp');
    }, 150);
    
    setTimeout(function() {
        $('.animate-slow').toggleClass('hidden-elem');
        $('.animate-slow').addClass('animated fadeIn');
    }, 1500);
});