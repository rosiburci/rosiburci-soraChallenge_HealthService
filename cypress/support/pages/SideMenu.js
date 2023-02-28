export class SideMenu {
    tg_sideMenuBt='#menu-toggle'
    op_home = 'a[href="./"]'
    op_history= 'a[href="history.php#history"]'
    op_logout= 'a[href="authenticate.php?logout"]'


    sideMenuSelectHomeOption(){
        cy.get(this.tg_sideMenuBt).click()
        cy.get(this.op_home).contains('Home').click()
    }

    sideMenuSelectHistoryOption(){
        cy.get(this.tg_sideMenuBt).click()
        cy.get(this.op_history).click()
    }
    
    sideMenuSelectLogoutOption(){
        cy.get(this.tg_sideMenuBt).click()
        cy.get(this.op_logout).click()
    }


}

export const sidemenu = new SideMenu()