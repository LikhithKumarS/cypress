import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../support/pageObjects/LoginPage";


const loginpage = new LoginPage();
let name;
Given("I navigate to bonds url", function () {
  cy.visit("https://juliemr.github.io/protractor-demo/");
});




When("I enter <username> and <password>", function (dataTable) {
  loginpage.getusernamerfield().type(dataTable.rawTable[1][0]);
  loginpage.getPasswordfield().type(dataTable.rawTable[1][1]);
});




And("I click on login button", function () {
  loginpage.getloginbutton().click();
  cy.wait(1500);
});

Then("I should be able to view error msg", function () {
 loginpage.geterrormessage().should('contain.text','Incorrect')
});
