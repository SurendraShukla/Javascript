// a simple facade that masks the various browser-specific methods
function addEvent( element, event, callback ) {

    if( window.addEventListener ) {
        element.addEventListener( event, callback, false );
    } else if( document.attachEvent ) {
        element.attachEvent( 'on' + event, callback );
    } else {
        element[ 'on' + event ] = callback;
    }

}


// https://carldanley.com/js-facade-pattern/