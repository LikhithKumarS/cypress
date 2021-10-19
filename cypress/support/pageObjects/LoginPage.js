class LoginPage{
 getloginbutton(){
   return cy.get('.active > :nth-child(6) > .col > .login__btn')
 }
 getusernamerfield(){
   return cy.get('#email')
 }
 getPasswordfield(){
   return cy.get('#password')
 }
geterrormessage(){
  return cy.get('.login__error')
}

}
export default LoginPage;