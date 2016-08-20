// buttonAnimation.js

window.$ = window.jQuery = require('./lib/jquery/dist/jquery.min.js');

var mousedown = false;
// document ready
$(document).ready(function() {

    // on mousedown display animation
    $('button').on('mousedown', function() {
        $(this).addClass('active');
        mousedown = true;
    });

    // on mouseup remove animation
    $('button').on('mouseup', function() {
        $(this).removeClass('active');
        mousedown = false;
    });

    // on mouse exit remove animation
    $('button').on('mouseout', function() {
        $(this).removeClass('active');
    });

    // on hover if mousedown is true
    $('button').on('mouseenter', function() {
        if(mousedown) {
            $(this).addClass('active');
        }
    });

    // if mouse click is released
    $(document).on('mouseup', function() {
        mousedown = false;
    });
});
