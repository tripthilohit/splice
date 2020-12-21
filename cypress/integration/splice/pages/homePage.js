require('cypress-xpath')

export class HomePage{
	goToUrl(url){
		cy.visit(url)
	}

	assertOnPage(){
		cy.get('.App-title')
		.contains('Simple React App')
	}

	clickUser(userEmail){						
		cy.get('p').contains(userEmail)
			.closest('.panel-body')
			.find('button')
			.click()
	}

	/* To make the above function simpler we could add a data-test attribute to 'Click to View Details' button element. 
		Simpler module would look something like below:

	clickUserDataAttributeWay(email){
		cy.get("[data-test='"+email+"']")
			.click()
	}
	*/
	verifyNoOfUsers(noOfUsers){
		cy.request('http://localhost:3000/assets/samplejson/customerlist.json')
			.its('body')
			.should('have.length',noOfUsers)
	}

	verifyApiReturnsJSON(){
		cy.request('http://localhost:3000/assets/samplejson/customer3.json')
			.its('headers')
			.its('content-type')
			.should('include', 'application/json')
	}

	verifyCustomerDetailsViaAPI(userEmail, name){
		var user = {
			"success" : true,
			"email": userEmail,
			"name": name
		}
		cy.request('GET', 'http://localhost:3000/assets/samplejson/customer3.json', user)
			.then((response) => {
				expect(response.status).equal(200)
				expect(response.body.email).equal(user.email)
				expect(response.body.name).equal(user.name)
			})
	}

	verifyCustomerInfoViaUI(userEmail,name){
		cy.xpath('//div[@class="customerdetails"]/div/div/p[1]')
		.contains(name)
		cy.get('.customerdetails > div > div > p:nth-child(2)')
		.contains(userEmail)

	}
}