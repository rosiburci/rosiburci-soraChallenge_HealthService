export class Login {
    txt_Tittlelogin= 'h2:contains("Login")'
    txt_login= '.col-sm-12.text-center>p'
    ipt_username= '#txt-username'
    ipt_password= '#txt-password'
    btn_login = '#btn-login'
    msg_loginError= '.col-sm-12.text-center>p.lead.text-danger'

    accessLoginPage(){
        cy.visit(Cypress.env("healthCare")+"/profile.php#login")
    }
    
    fillUsername(user){
        cy.get(this.ipt_username).type(user)
    } 

    fillPassword(pass){
        cy.get(this.ipt_password).type(pass)
    }

    clickLoginButton(){
        cy.get(this.btn_login).click()
    }

    userAuthentication (user, pass){
        this.fillUsername (user)
        this.fillPassword (pass)
        this.clickLoginButton()
    }

    validateTexts(tittle, txt){
        cy.get(this.txt_Tittlelogin).should('have.text', tittle)
        cy.get(this.txt_login).should('have.text', txt)
    }

    validateLoginErrorMsg (msg){
        cy.get(this.msg_loginError).should('be.visible').should('have.text', msg)
    }

    checkLoginElements(){
        this.elVerification= [
           this.txt_Tittlelogin,
           this.txt_login,
           this.ipt_username,
           this.ipt_password,
           this.btn_login
        ]
        return this.elVerification;
       }

}

export const login = new Login()