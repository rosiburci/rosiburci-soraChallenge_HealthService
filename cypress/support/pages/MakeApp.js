export class MakeApp {
    btn_makeAppHome= '#btn-make-appointment'
    ipt_facility= '#combo_facility'
    op_tokyo= "Tokyo CURA Healthcare Center"
    op_hongkong= "Hongkong CURA Healthcare Center"
    op_seoul= "Seoul CURA Healthcare Center"
    ckb_hospRead= '#chk_hospotal_readmission'
    rd_medicare= '#radio_program_medicare'
    rd_medicaid='#radio_program_medicaid'
    rd_none='#radio_program_none'
    dt_visitDate='#txt_visit_date'
    dp_visitDate= '.glyphicon.glyphicon-calendar'
    ipt_comment='#txt_comment'
    btn_bookApp='#btn-book-appointment'
    txt_tittle= '.col-sm-12.text-center>h2'

    clickMakeAppHomePageButton(){
        cy.get(this.btn_makeAppHome).click()
    }

    fillFacility (f_option){
        cy.get(this.ipt_facility).select(f_option)
    }

    checkHospitalReadmission (){
        cy.get(this.ckb_hospRead).check()
    }

    fillHealthCareProgram(h_option){
        cy.get(h_option).check()
    }

    fillvisitDate(){
        cy.get(this.dp_visitDate).click().then(() => {
            cy.get('.datepicker-days').click()
            cy.get('.datepicker-days > .table-condensed .next').click()
            cy.get('.table-condensed>tbody>tr:nth-of-type(5)>td').contains("27").click()
            cy.get(this.txt_tittle).click()            
        })
    }

    fillComment(txt) {
        
        cy.get(this.ipt_comment).click().type(txt)
    }
    
    clickBookAppButton(){
        cy.get(this.btn_bookApp).click()
    }

    fillFormBookApp(f_option, h_option,txt){
        this.fillFacility(f_option)
        this.checkHospitalReadmission()
        this.fillHealthCareProgram(h_option)
        this.fillvisitDate()
        this.fillComment(txt)
        this.clickBookAppButton()
    }



    checkMakeAppElements(){
     this.elVerification= [
        this.txt_tittle,
        this.ipt_facility,
        this.ckb_hospRead,
        this.rd_medicare,
        this.rd_medicaid,
        this.rd_none,
        this.dt_visitDate,
        this.ipt_comment,
        this.btn_bookApp
     ]
     return this.elVerification;
    }

}

export const makeapp = new MakeApp()