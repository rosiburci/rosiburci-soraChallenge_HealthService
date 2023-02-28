# soraChallenge_HealthService

Pre requisite:
The automation was done in Cypress, so it is necessary Node.js deployed on your local machine

To clone the project:
git clone git@github.com:rosiburci/soraChallenge_HealthService.git

To install the project:
npm install cypress

To run the project:
npx cypress open

Automation tests guide:

The tests chosen to be automated:

Login:
Scenario 1: User enters valid credentials
Given that the user is on the Login page with the login fields
And the user fills the username with a valid username
And the user fills the password with a valid password
When he clicks Login button
Then the user is taken to Make Appointment page

Scenario 3: User enters invalid password
Given that the user is on the Login page with the login fields
And the user fills the username with a valid username
And the user fills the password with a invalid password
When he clicks Login button
Then an error message is displayed "Login failed! Please ensure the username and password are valid."

Scenario 4: User successfully authenticated, credentials are not requested again
Given that the user is successfully authenticated 
When the user selects Home > Make Appointment 
Then the Make Appointment form is displayed and the login credentials are not requested again

Book an appointment:
Scenario 2: User books an appointment successfully - options: Seoul, Checked hospital readmission, None
Given that the user is successfully authenticated
And the user clicks in Make Appointment option on homepage
When the user selects Seoul CURA Healthcare Center in facility field
And the user selects the hospital readmission option
And the user selects None in Healthcare Program field
And the user fills in the remaining fields - Visit Date and Comment 
And clicks in Book Appointment button
Then the user is taken to Appointment Confirmation page and the informations about the appointment are displayed

Scenario 4: Validation of mandatory fields
Given that the user is successfully authenticated
And the user clicks in Make Appointment option on homepage
When the user fills all informations from the form except Visit Date (required)
Then a browser error message is displayed and the user is kepts in form page until the Visit Date field is informed 

Scenario 5: User not authenticated tries to book an appointment
Given that the user is not authenticated
When the user clicks in Make Appointment option on homepage
Then the user is taken to Login page

Automation framework guide:

The tests scenarios are located in cypress > e2e folder
Login scenarios are located in loginTests.cy.js file
Book an appointment scenarios are located in makeAppTests.cy.js

Some field validations uses external json files that are located in  cypress > fixtures
The json credentials.json file is describing the user credentials
The json txtMessages.json file is describing text informations such as - labels, error messages, text messages, tittles , subtittles

For each page a class was created where the elements and functions of that page are declared. The classes are located in cypress>support>pages
The class Login.js declares the login page elements and functions
The class MakeApp.js declares the Book Appointment page elements and functions
The class SideMenu.js declares the side menu options and functions
The class AppConf.js declares the Appointment Confirmation page elements and functions

Additional information: the faker library (declared package.json file) was used to fill password information with random values for invalid password scenario.
