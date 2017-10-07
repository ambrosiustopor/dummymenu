describe("Dummymenu with 20 list items", function() {

	/**
	 * @see https://bitsofco.de/linting-html-using-css/
	 */
		
	beforeAll(function() {

		jasmine.getFixtures().fixturesPath = 'spec/fixtures/';		

	});

	var $htmlFixture,
	    $dummymenu;
	
	beforeEach(function() {

		loadFixtures('dm-repeat20.html');
		$htmlFixture = $('#my-fixture');
		$dummymenu = $('#dummymenu');

	});
	
	it("should have the correct fixture", function() {

		expect( $('#my-fixture') ).toContainText( 'some' );
		
	});

	// 
	
	xit("is a test", function() {

		setFixtures(sandbox({"data-test": 'x999'}))
		//$('#sandbox').myTestedClassRemoverPlugin()

		console.log($(':root').html())

		expect($('#sandbox')).toHaveData('test')

	});

	it("should have a dummymenu element", function() {

		expect( $dummymenu )
			.toHaveData('dummymenu');
		
	});

	it("should have 20 list item elememts", function() {

		var selector = 'ul > li';
		
		expect( $dummymenu.find(selector) )
			.toHaveLength( 20 );
		
	});

});
