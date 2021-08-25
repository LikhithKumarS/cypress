class LoginPage{
 getloginbutton(){
   return cy.get('.login-button-primary')
 }
 getusernamerfield(){
   return cy.get('#username')
 }
 getPasswordfield(){
   return cy.get('#password')
 }
geterrormessage(){
  return cy.get('.login-error-msg')
}

}
export default LoginPage;