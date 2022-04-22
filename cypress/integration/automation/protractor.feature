Feature: protractor login page
    
    Scenario: Login bonds with valid credentials
        Given I navigate to protractor url
        When  I enter <username> and <password>
        |username|password|
        |likhithjune@gmail.com|dbsbhb|
        And   I click on login button
        Then  I should be able to view error msg

    


