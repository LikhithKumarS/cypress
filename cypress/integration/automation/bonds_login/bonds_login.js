import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../support/pageObjects/LoginPage";


const loginpage = new LoginPage();
let name;
Given("I navigate to bonds url", function () {
  cy.visit("");
});




When("I enter <username> and <password>", function (dataTable) {
  loginpage.getUsernamefield().type(dataTable.rawTable[1][0]);
  loginpage.getPasswordfield().type(dataTable.rawTable[1][1]);
});

And("I click on login button", function () {
  loginpage.getLoginButton().click();
  cy.wait(1500);
});

Then("I should be able to view DealSummary page", function () {
  loginpage.activtab().should('eq','true')
  loginpage.proj()
});
