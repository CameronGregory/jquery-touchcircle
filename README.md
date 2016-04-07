# jQuery Touch Circle [![Build Status](https://secure.travis-ci.org/CameronGregory/jquery-touchcircle.svg?branch=master)](https://travis-ci.org/CameronGregory/jquery-touchcircle)

Display indicators for touch events. Particularly useful for video captures.

## Usage ##

1. Include jQuery:

	```html
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.2.1/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.touchcircle.min.js"></script>
	```

3. Call the plugin:

	```javascript
	$("body").touchCircle({
		radius: 40
	});
	```
	
## Example ##

    <html>
      <head>
        <title>TouchCircle Test</title>
      </head>
      <body>
        ...
        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.2.1/jquery.min.js"></script>
        <script src="dist/jquery.touchcircle.js"></script>
        <script type="text/javascript">
          $( function() { $( "body" ).touchCircle() } )
        </script>
      </body>
    </html>

## Options ##
    $( "body" ).touchCircle( {
      enabled: true, // if false, will disable everything
      radius: 50, // size of the touch circle
      zindex: 10, // z-index of the overlay
      createTouchDiv: function( me ) { // create your own custom touch div
        var touchPointDiv = $( "<div class='touchcircle_point'></div>" );
        touchPointDiv.css( "width", me.settings.radius * 2 );
        touchPointDiv.css( "height", me.settings.radius * 2 );
        touchPointDiv.css( "border", "4px solid black" );
        touchPointDiv.css( "background", "#999" );
        touchPointDiv.css( "opacity", "0.5" );
        touchPointDiv.css( "border-radius", "50%" );
        
        // note that the plugin will also set position:absolute
        return touchPointDiv;
      }
    })
## Demo ##

> Quick [Demo](https://cdn.rawgit.com/camerongregory/jquery-touchcircle/master/demo/test.html)
