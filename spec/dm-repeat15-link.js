describe("Dummymenu with 15 list items with links", function() {

	beforeAll(function() {

		jasmine.getFixtures().fixturesPath = 'spec/fixtures/';		

	});

	var $htmlFixture,
	    $dummymenu;
	
	beforeEach(function() {

		loadFixtures('dm-repeat15-link.html');
		$htmlFixture = $('#my-fixture');
		$dummymenu = $('#dummymenu');

	});
	
	it("should have a dummymenu element", function() {

		expect( $dummymenu )
			.toHaveData('dummymenu');
		
	});

	it("should have 15 list item elememts with links", function() {

		var selector = 'ul > li > a[href^="#"]';
		
		expect( $dummymenu.find( selector ) )
			.toHaveLength( 15 );
		
	});

});
