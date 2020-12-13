# Better Home Assignment

All the answers to the home challenge questions are in the file ```answers.md```.
The tool chosen to automate the tests is Cypress.

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

