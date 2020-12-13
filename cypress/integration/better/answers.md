### Document bugs (if any) you see in the project. It would be useful to see what bug report you would write if you find any bugs.

Bug Report:

##### Issue Statement: 
The alternative view (i.e backside) of the post does not transition to a correct timeline.

##### Screenshot/Video of the Bug/Console: 
https://monosnap.com/file/1IGMIebWU0rdylfl7WcTiYlHVmch5r

##### Environment: 
Local/Dev

##### Test data if required:  
N/A

##### Steps to reproduce the issue: 

1. Go to http://localhost:8080/
2. Add a message in the chat input area
3. Press Enter
4. Hover over the post (Tap if on mobile)
5. Note the timeline on the alternative (backside) view

##### Expected Result: 
The alternative view (i.e backside) of the post should transition to a correct timeline.

##### Actual Result: 
The alternative view (i.e backside) of the post does not transition to a correct timeline.


### Document any accessibility or usability issues.

Bug Report:

##### Issue Statement: 
[Accessibility] The contrast between foreground and background colors do not meet WCAG 2 AA contrast ratio thresholds. Element has insufficient color contrast of 2.07 (foreground color: #ffffff, background color: #00cc9c, font size: 15.6pt (20.8469px), font weight: normal). Expected contrast ratio should be  4.5:1.


##### Screenshot/Video of the Bug/Console: 
https://monosnap.com/file/osdGYnzcfKUKdbCKd1HXHNFgo7omjg

##### Environment: 
Local/Dev

##### Test data if required:  
The test tool used for accessibility testing here was Axe Pro Beta

##### Steps to reproduce the issue: 
1. Go to http://localhost:8080/
2. Scan the page using Axe Pro
 

##### Expected Result: 
The contrast between foreground and background colors should meet WCAG 2 AA contrast ratio thresholds.

##### Actual Result: 
The contrast between foreground and background colors do not meet WCAG 2 AA contrast ratio thresholds.


### Document any thoughts you have on the project's tests, especially if you see any test gaps. What kinds of testing should be done on this project?

Types of testing that should be done on this project are functionality testing, API testing, Cross browser/device testing and probably load testing too.

### Document any manual tests you have done, or would like to do.

Test case 1 - Verify if the feature design matches with the design spec(Design-Spec-Main.png).

Test case 2 - Verify if the user can add a new message and the post shows up on the UI on submission.

Test 3 - Refresh the page and verify to see if the data did not persist. According to the spec document (Spec.md) there is no need to persist the data.

Test case 4 - Verify if hovering(on Desktop)/tapping(on Mobile) over the post, transitions the post into the alternative view. 
Note: Should match the design in Design-Spec-Click.png.

Test case 5 - Verify if the post displays date, time and user’s avatar.

Test case 6 - Verify if validation message is displayed when empty message is posted.

Test case 7 - Verify if the number of characters a post can take is 140 or less and not more than that.

Test case 8 - Cross browser/device testing on 
Mac - Safari, Firefox and Chrome
Windows - Edge, Firefox and Chrome
iPhone - Safari, Chrome
Android - Firefox, Chrome


### Extend the existing tests, or add on a few new [selenium/cypress/tool of choice] tests. It's ok to choose a language that is not javascript and attach a separate zip. Choose anything you are comfortable with.

Tool used for automated tests is Cypress.
Please see tests under folder ../Cypress/cypress/integration/better
`
