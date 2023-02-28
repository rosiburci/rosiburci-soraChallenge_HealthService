import { makeapp } from '../support/pages/MakeApp.js'
import { login } from '../support/pages/Login.js'
import { appconf } from '../support/pages/AppConf.js';
import { sidemenu } from '../support/pages/SideMenu.js'
const credentials = require('../fixtures/credentials.json')
const texts = require('../fixtures/txtMessages.json')

describe('Book an appointment Tests', () => {
    beforeEach(() => {
      login.accessLoginPage()
      login.userAuthentication(credentials.username, credentials.password)
    });

    it('Scenario 2: User books an appointment successfully - options: Seoul, Checked hospital readmission, None', () => {
       makeapp.fillFormBookApp(makeapp.op_seoul,makeapp.rd_none, 'Scenario 2 comment - Seoul, Checked hospital read, None')
       appconf.validateConfirmationApp(texts.appConfirmationTittle, texts.appConfirmationSubtittle, makeapp.op_seoul, texts.hospitalReadValueChecked, 'None', '27/03/2023', 'Scenario 2 comment - Seoul, Checked hospital read, None')
       
    })

    it('Scenario 4: Validation of mandatory fields', () => {
      makeapp.fillFacility(makeapp.op_hongkong)
      makeapp.fillHealthCareProgram(makeapp.rd_medicaid)
      makeapp.fillComment('Scenario 4 comment: Validation of mandatory fields')
      makeapp.clickBookAppButton()
      cy.get('input:invalid').should('have.length', 1)
      cy.get(makeapp.dt_visitDate).then(($input) => {
          expect($input[0].validationMessage).match(/(Preencha este campo.|Please fill out this field.)/)
          //the match was used because the browser error message it will depend of the language that your laptop is set
        })    
    })

    it('Scenario 5: User not authenticated tries to book an appointment', () => {
      sidemenu.sideMenuSelectLogoutOption()
      makeapp.clickMakeAppHomePageButton()
      login.checkLoginElements().forEach(element => {
        cy.get(element).should('be.visible')
      })


    })

})