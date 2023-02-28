import { MakeApp } from './MakeApp';

export class AppConf extends MakeApp{
    v_facility='#facility'
    v_hospRead='#hospital_readmission'
    v_healthProg= '#program'
    v_visitDate= '#visit_date'
    v_comment= '#comment'
    txt_ctittle= '.col-xs-12.text-center>h2'
    txt_subtittle= 'p.lead'
    btn_homePage= '.btn.btn-default'

    validateTittles(tittle, subtittle){
        cy.get(this.txt_ctittle).should('be.visible').should('have.text', tittle)
        cy.get(this.txt_subtittle).should('be.visible').should('have.text', subtittle)
    }

    validateFacilityValue(f_option){
        cy.get(this.v_facility).should('be.visible').should('have.text', f_option)
    }

    validateHospitalReadmissionValue (h_value){
        cy.get(this.v_hospRead).should('be.visible').should('have.text', h_value)
    }

    validateHealthCareProgram(h_option){
        cy.get(this.v_healthProg).should('be.visible').should('have.text', h_option)
    }
    
    validateVisitDateValue (visitDate){
        cy.get(this.v_visitDate).should('be.visible').should('have.text', visitDate)
    }

    validateCommentValue (comment){
        cy.get(this.v_comment).should('be.visible').should('have.text', comment)
    }

    validateHomePageButton(){
        cy.get(this.btn_homePage).should('be.visible')
    }

    validateConfirmationApp(tittle, subtittle, f_option, h_value, h_option, visitDate, comment){
        this.validateTittles(tittle, subtittle)
        this.validateFacilityValue(f_option)
        this.validateHospitalReadmissionValue(h_value)
        this.validateHealthCareProgram(h_option)
        this.validateVisitDateValue (visitDate)
        this.validateCommentValue (comment)
        this.validateHomePageButton()
    }


}
export const appconf = new AppConf()