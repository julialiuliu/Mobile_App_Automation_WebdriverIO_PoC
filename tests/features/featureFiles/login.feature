Feature: Log in
    As a user I should be able to log in

    Background:
        Given I open the app
        And I load the testdata for "login"

    Scenario: I am able to login the app
        When I set testdata value "email" from file "login" on input field "@login.email"
        And I set testdata value "password" from file "login" on input field "@login.password"

        When I tap on element "@login.btnLogin"
        Then I expect the element "@login.titleLoginSucceed" becomes visible
