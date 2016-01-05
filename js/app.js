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
});