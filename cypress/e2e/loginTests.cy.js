import { login } from '../support/pages/Login.js'
import { makeapp } from '../support/pages/MakeApp.js'
import { sidemenu } from '../support/pages/SideMenu.js'
const credentials = require('../fixtures/credentials.json')
const faker = require('faker')
const wrongPass= faker.internet.password()
const msgLoginError = require('../fixtures/txtMessages.json')

describe('Login Tests', () => {
    beforeEach(() => {
      login.accessLoginPage()
    });

    it('Scenario 1: User enters valid credentials ', () => {
      login.userAuthentication(credentials.username, credentials.password)
      makeapp.checkMakeAppElements().forEach(element => {
            cy.get(element).should('be.visible')
      })

    })

    it('Scenario 3: User enters invalid password ', () => {
      login.userAuthentication(credentials.username, wrongPass)
      login.validateLoginErrorMsg(msgLoginError.errorMsgLogin)

    })

    it('Scenario 4: User successfully authenticated, credentials are not requested again ', () => {
      login.userAuthentication(credentials.username, credentials.password)
      sidemenu.sideMenuSelectHomeOption()

      login.checkLoginElements().forEach(element => {
        cy.get(element).should('not.exist')
      })

      makeapp.checkMakeAppElements().forEach(element => {
        cy.get(element).should('be.visible')
      })

    })

})