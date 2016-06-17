// Note: See http://blog.garstasio.com/you-dont-need-jquery/ and http://youmightnotneedjquery.com/ for JS commands that don't require jQuery
$(document).ready(function(){

// // initialize pagepilling
// $('#pagepiling').pagepiling({
// 	direction: 'vertical', 
// 	loopBottom: 'true',
// 	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
//     menu: '#myMenu'
// 	});

// initialize fullpage

    $('#fullpage').fullpage({
    	//Navigation
        menu: '#main-menu',
        lockAnchors: false,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
    });



});