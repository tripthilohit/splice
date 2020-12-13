import {HomePage} from '../better/pages/homePage'

describe('UI Tests', function(){

const homePage = new HomePage()

beforeEach(() => {
    cy.visit('/')
    cy.clearCookies()

    homePage.assertOnCorrectPage()

    cy.fixture('example').then(function (data){
			this.data = data
		})
  })

	it('Verify initial state -  Number of Posts', function(){		
		homePage.verifyApiReturnsJSON()
		homePage.verifyTotalPosts(this.data.postCount)
	})

	it('Verify initial state -  Number of Users', function(){
		homePage.verifyApiReturnsJSON()
		homePage.verifyTotalUsers(this.data.userCount)
	})

	it('Verify Add Chat', function(){
		const message = 'hello hello hello'

		homePage.addChat(message)
		homePage.verifyIfChatBodyIsDisplayed()
	})
})

describe('API test', function(){

	it('Verify Add Chat via API ', function(){

        var post = {
            "success": true,
			"message": "hello hello",
			"user": "client"
        }

        cy.request('POST','/api/posts', post).then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.success).equal(post.success)
            expect(response.body.received.message).equal(post.message)
           
        })
	})
})
	
