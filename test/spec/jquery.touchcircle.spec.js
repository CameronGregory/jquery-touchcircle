( function( $, QUnit ) {

	"use strict";

	var $testCanvas = $( "#testCanvas" );
	var $fixture = null;

	QUnit.module( "jQuery TouchCircle", {
		beforeEach: function() {

			// fixture is the element where your jQuery plugin will act
			$fixture = $( "<div/>" );

			$testCanvas.append( $fixture );
		},
		afterEach: function() {

			// we remove the element to reset our plugin job :)
			$fixture.remove();
		}
	} );

	QUnit.test( "is inside jQuery library", function( assert ) {

		assert.equal( typeof $.fn.touchCircle, "function", "has function inside jquery.fn" );
		assert.equal( typeof $fixture.touchCircle, "function", "another way to test it" );
	} );

	QUnit.test( "returns jQuery functions after called (chaining)", function( assert ) {
		assert.equal(
			typeof $fixture.touchCircle().on,
			"function",
			"'on' function must exist after plugin call" );
	} );

	QUnit.test( "caches plugin instance", function( assert ) {
		$fixture.touchCircle();
		assert.ok(
			$fixture.data( "plugin_touchCircle" ),
			"has cached it into a jQuery data"
		);
	} );

	QUnit.test( "enable custom radius", function( assert ) {
		$fixture.touchCircle( {
			radius: 20
		} );

		var pluginData = $fixture.data( "plugin_touchCircle" );

		assert.equal(
			pluginData.settings.radius,20,
			"extend plugin settings"
		);

	} );

	//QUnit.test( "changes the element text", function( assert ) {
		//$fixture.touchCircle();
//
		//assert.equal( $fixture.text(), "jQuery TouchCircle" );
	//} );

	//QUnit.test(
		//"has #yourOtherFunction working as expected",
		//function( assert ) {
			//$fixture.touchCircle();
//
			//var instance = $fixture.data( "plugin_touchCircle" ),
				//expectedText = "foobar";
//
			//instance.yourOtherFunction( expectedText );
			//assert.equal( $fixture.text(), expectedText );
		//}
	//);

}( jQuery, QUnit ) );
