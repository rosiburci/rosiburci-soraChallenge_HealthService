# soraChallenge_HealthService

Pre requisite:
The automation was done in Cypress, so it is necessary Node.js deployed on your local machine

To clone the project:
git clone git@github.com:rosiburci/soraChallenge_HealthService.git

To install the project:
npm install cypress

To run the project:
npx cypress open

# Automation tests guide:

The tests chosen to be automated:

Login:
* Scenario 1: User enters valid credentials
* Scenario 3: User enters invalid password:
* Scenario 4: User successfully authenticated, credentials are not requested again:

Book an appointment:
* Scenario 2: User books an appointment successfully - options: Seoul, Checked hospital readmission, None
* Scenario 4: Validation of mandatory fields
* Scenario 5: User not authenticated tries to book an appointment

# Automation framework guide:

The tests scenarios are located in cypress > e2e folder
* Login scenarios are located in loginTests.cy.js file
* Book an appointment scenarios are located in makeAppTests.cy.js

Some field validations uses external json files that are located in  cypress > fixtures
* The json credentials.json file is describing the user credentials
* The json txtMessages.json file is describing text informations such as - labels, error messages, text messages, tittles , subtittles

For each page a class was created where the elements and functions of that page are declared. The classes are located in cypress>support>pages
* The class Login.js declares the login page elements and functions
* The class MakeApp.js declares the Book Appointment page elements and functions
* The class SideMenu.js declares the side menu options and functions
* The class AppConf.js declares the Appointment Confirmation page elements and functions

Additional information: the faker library (declared package.json file) was used to fill password information with random values for invalid password scenario.
