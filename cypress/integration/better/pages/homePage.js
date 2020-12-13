export class HomePage{

	assertOnCorrectPage(){
		cy.get('#chatInput', {timeout: 5000})
		cy.get('.chat-list').should('be.visible')
	}

	addChat(message){
		cy.get('#chatInput')
			.click()
			.type(message)
		cy.get('#chatSubmit')
			.click()
	}

	verifyIfChatBodyIsDisplayed(){
		cy.get('.chat-meta-timeAgo').should('be.visible')
		cy.get('.chat-post-message').should('be.visible')
		cy.get('.chat-post-profileImg').should('be.visible')
	}

	addChatViaAPI(item){
		cy.request('POST', '/posts', item)
	}

	verifyApiReturnsJSON(){
		cy.request('/api/users')
			.its('headers')
      		.its('content-type')
      		.should('include', 'application/json')
	}

	verifyTotalPosts(numOfPosts){
		cy.request('/api/posts')
			.its('body')
     	 .should('have.length', numOfPosts)
	}

	verifyTotalUsers(numOfUsers){
		cy.request('/api/users')
			.its('body')
     	 .should('have.length', numOfUsers)
	}
	
}