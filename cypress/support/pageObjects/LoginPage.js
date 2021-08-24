class LoginPage{
  getUsernamefield() {
    return cy.get("#mat-input-0");
  }
  getPasswordfield() {
    return cy.get("#mat-input-1");
  }
  getLoginButton(){
      return cy.get('.mat-focus-indicator');
  }
  dealsummaryTab(){
      return cy.get('.mat-tab-label-active');
  }
  activtab(){
    return cy.get('.mat-tab-label-active').invoke('attr','ng-reflect-active')
  }

proj(){
  return cy.get('.project-description-col').find('div.key').each(($el, index, $list) => {
  

 console.log($el.text());
 cy.log($el.text());
 expect($el.text()).to.exist
 

})

}
}
export default LoginPage;