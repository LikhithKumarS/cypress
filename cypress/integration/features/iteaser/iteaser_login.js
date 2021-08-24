import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Homepage from "../../../support/pageObjects/AdditionalInformation";
import Products from "../../../support/pageObjects/Productspage";

const homePage = new Homepage();
const products = new Products();
let name;
Given("I open page", function () {
  cy.visit("https://www.rahulshettyacademy.com/angularpractice/");
});

When("I add items to cart", function () {
  homePage.getShopTab().click();
  this.data.productName.forEach((element) => {
    cy.selectProduct(element);
  });
});

And("Validate the prices", function () {
  products.checkoutButton().click();
});

Then("Select country and verify Success message", function () {
  products.completecheckout().click();
  products.checkagreement().click({ force: true });
  products.getCountry().type("india");
  cy.wait(7000);
  products.getsuggestion().trigger("click");
  products.purchase().click();
  cy.get(".alert").should("contain.text", "Success");
});

//feature1.1
When("I fill the form details", function (dataTable) {
  name= dataTable.rawTable[1][0]
  homePage.getEditBox().type(dataTable.rawTable[1][0]);
  homePage.getGender().select(dataTable.rawTable[1][1]);
});
//datatable.rawtable without fixtures

Then("Validate form", function () {
  homePage.getTwoWayDataBinding().should("have.value", name);
  homePage.getEditBox().should("have.attr", "minlength", "2");
});

And("click shop", function () {
  homePage.getShopTab().click();
});
