import {HomePage} from '../splice/pages/homePage'

describe('Test Simple react App', function(){

	const homePage = new HomePage()

	let variables = {
		userEmail : 'tyrion@test.com',
		name : 'Tyrion'
	}

	beforeEach(() => {
		homePage.goToUrl('/')
		homePage.assertOnPage()
		cy.fixture('example').then((data) => {
			this.data = data //In case there are variables that are defined in fixtures/example.json file. In this case there no variables that are shared between multiple files.
		})
	})

	it('Test case 1 - Verify user details using the UI', function(){
		homePage.clickUser(variables.userEmail)
		homePage.verifyCustomerInfoViaUI(variables.userEmail,variables.name)
	})

	it('Test case 2 - Verify user details using APIs', function(){
		homePage.verifyCustomerDetailsViaAPI(variables.userEmail, variables.name)
	})

	it('Test case 3 - Verify if the count of users is correct', function(){
		homePage.verifyApiReturnsJSON()   // Verify if api returns JSON
		homePage.verifyNoOfUsers(3)		
	})
})