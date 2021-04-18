
Feature: Validate the recurring meeting using native ios app functionality
  
  Scenario Outline: Create workshop meeting event 
    Given I have launched the Calendar App
    When It is a working "Friday"
    Then Meeting is between 9:30am to 1:30pm
    When I want to book a meeting with the title "<MeetingTitle1>"
    And I invite <Meeting1Participants> of people
    And I save the meeting
    Then I Check if the meeting is created as expected
    When It is a working "Monday"
    And Meeting is for 15 minutes
    Then I want to book a meeting with the title "<MeetingTitle2>"
    And I invite <Meeting2Particpants> of people
    And I save the meeting
    Then I check if the meeting is created as expected

  Examples:
    | username  | Meeting1Title | Meeting2Title | Meeting1Participants | Meeting2Particpants | 
    | loginUser | Workshop      | Stand Up      | 15                   | 10                  |