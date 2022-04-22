beforeEach(function(){
    cy.fixture("test").then(function (data) {
        //data scope s restricted to this function
        //to over come this we will use this as global variable
        this.data = data;
        //this keyword refers to whole class
  
  
      });
})