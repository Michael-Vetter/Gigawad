/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {
    //alert('enter cbpAnimatedHeader');
	var docElem = document.documentElement,
		header = document.querySelector( '.cbp-af-header' ),
		didScroll = false,
		changeHeaderOn = 300;
    //alert('header=' + header.outerHTML);
    function init() {
        
		scrollPage();
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
        var sy = scrollY();
        //alert('enter scrollPage');
        //header = header || document.querySelector('.cbp-af-header');
		if ( sy >= changeHeaderOn ) {
            classie.add(header, 'cbp-af-header-shrink');
            //classie.remove(header, 'cbp-af-header-shrink');
            //alert('enter scrollPage 1');
            //alert('header=' + header.outerHTML);
		}
		else {
            classie.remove(header, 'cbp-af-header-shrink');
            //classie.add(header, 'cbp-af-header-shrink');
            //alert('enter scrollPage 2');
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();
