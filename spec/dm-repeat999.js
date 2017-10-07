describe("Dummymenu with 200 (999) list items", function() {

	beforeAll(function() {

		jasmine.getFixtures().fixturesPath = 'spec/fixtures/';		

	});

	var $htmlFixture,
	    $dummymenu;
	
	beforeEach(function() {

		loadFixtures('dm-repeat999.html');
		$htmlFixture = $('#my-fixture');
		$dummymenu = $('#dummymenu');

	});
	
	it("should have a dummymenu element", function() {

		expect( $dummymenu )
			.toHaveData('dummymenu');
		
	});

	it("should have 200 list item elememts", function() {

		var selector = 'ul > li';
		
		expect( $dummymenu.find(selector) )
			.toHaveLength( 200 );
		
	});

});
