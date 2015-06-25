/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
  
    "use strict";
    
    
    
    /* animsition */
    $(".animsition").animsition({
  
        inClass               :   'fade-in-down-sm',
        outClass              :   'fade-out-up-sm',
        inDuration            :    600,
        outDuration           :    600,
        linkElement           :   '.animsition-link',
        // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
        loading               :    true,
        loadingParentElement  :   'body', //animsition wrapper element
        loadingClass          :   'animsition-loading',
        unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ],
    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    
        overlay               :   false,

        overlayClass          :   'animsition-overlay-slide',
        overlayParentElement  :   'body'
    });
    
    
    /* search filter */
    $('.filter_btn').click(function () {
        $('.filter_menu').fadeToggle();
    });

    
    /* typed */
    $('.element').typed({
        strings: ["Web Design", "Interior Design", "Accounting", "Customer Service"],
        // typing speed
        typeSpeed: 80,
        // time before typing starts
        startDelay: 600,
        // backspacing speed
        backSpeed: 0,
        // time before backspacing
        backDelay: 1000,
        // loop
        loop: true,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: "|"
    });
    
    

    
    
});