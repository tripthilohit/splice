# Splice Home Assignment questions

### Bug Report!

Q: What is an excellent bug report you created at a previous company which was of a high priority, high severity in a build about to be deployed to production? (Please write the bug report below)

##### Background of the Feature: 
Only 3 introductory modules must be visible when a student enrolls to a bootcamp course. The rest of them must be locked until a payment has been scheduled.

##### Issue Statement: 
All the courses are unlocked as soon as a student enrolls to a bootcamp course without making any payment. 

##### Priority:
Blocker (As it affects revenue generation and user experience)

##### Screenshot/Video of the Bug/Console: 


##### Environment: 
Dev Environment

##### Test data if required:  
Student test user:
Email: test@xyz.com
Pass: test 

##### Steps to reproduce the issue: 

1. Go to http://qa-xyz.com/
2. Login as the above test user
3. On Overview page note that all the course modules are unlocked
4. Go to Payments page
5. Note that the user has not scheduled any payments yet

##### Expected Result: 
Only 3 introductory modules must be unlocked when a student enrolls to a bootcamp course. The rest of them must be locked until a payment has been received.

##### Actual Result: 
All the courses are unlocked.

### Bug Report Follow up

Q: For the created bug report example you created in the previous question, what happened and how did you navigate the bug lifecycle, bug discussion?
The above bug was found when the new feature was tested on the Dev environment. Bug report was created in Jira and then assigned to a dev. In the meantime automated test script was written to test such a scenario. Once the dev completed working on the bug ticket and was assigned back, the automated script was run to see if the bug was resolved. Once confirmed that it was resolved it was then deployed to QA(Pre Prod) and Prod enironment.

