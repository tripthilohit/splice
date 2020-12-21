# Splice Home Assignment

### Website chosen to do the assignment
I have chosen a public project from Github to do this project. Here is the link https://github.com/aditya-sridhar/simple-reactjs-app .

Follow the following instructions to first set up the project on your local:

Step 1: Clone this project on your local using (if you have node JS already installed)
```git clone https://github.com/aditya-sridhar/simple-reactjs-app```

If do not have node JS already installed follow the instructions in the project's README.md file.

Step 2: Open Terminal and go to the cloned project folder i.e 'simple-reactjs-app'

Step 3: To Install the npm package type the following command
 ```npm install``` 

step 4: To run the application type the following command
 ```npm start```

step 5: Confirm the project opens on localhost:3000

### Tool chosen to complete the assignment

The tool chosen to automate the tests is Cypress.
Also, all the answers to the home challenge questions are in the file ```answers.md```.

### What is Cypress?

Cypress is the future tool for testing front end modern web applications. 
It aims to overcome the hurdles that the engineers and developers face while testing web applications based on React and AngularJS. 
It is a quick, effortless and dependable tool for testing any applications that run on browsers.

### How to install Cypress?

Install Cypress via npm:

```cd /your/project/path```
```npm install cypress --save-dev```

This will install Cypress locally as a dev dependency for your project.

Note: Make sure that you have already run npm init or have a node_modules folder or package.json file in the root 
of your project to ensure cypress is installed in the correct directory.

For more information please see: https://docs.cypress.io/guides/getting-started/installing-cypress.html#npm-install


### How to open and run tests?

If you used npm to install, Cypress has now been installed to your ```./node_modules``` directory, with its binary executable accessible from ```./node_modules/.bin```.

Now you can open Cypress from your project root one of the following way:

```npx cypress open```

After a moment, the Cypress Test Runner will launch and you can run the tests via the UI.

