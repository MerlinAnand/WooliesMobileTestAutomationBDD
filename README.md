
Native Mobile Application Testing using WebdriverIO and Appium

## WebdriverIO
WebdriverIO is an open source testing utility for nodejs. It makes it possible to write super easy selenium tests with Javascript in your favorite BDD or TDD test framework. It basically sends requests to a Selenium server via the WebDriver Protocol and handles its response.

## Appium
Appium is an open source automation tool for running scripts and testing native applications, mobile-web applications and hybrid applications on Android or iOS using a webdriver

WebdriverIO: 6.7.2
Appium: 6.1.16
## Installing Appium on a local machine
See Installing Appium on a local machine - https://github.com/webdriverio/appium-boilerplate/blob/main/docs/APPIUM.md


## Setting up Android and iOS on a local machine
To setup your local machine to use an Android emulator and an iOS simulator see Setting up Android and iOS on a local machine
https://github.com/webdriverio/appium-boilerplate/blob/main/docs/ANDROID_IOS_SETUP.md

## How to start
- IDE to install :  Visual studio code
- Open the emulator and run the command ```adb devices``` for android
- Open terminal in visual code and install ```npm install```
- Need not start the appium server explicitely 
- Open the repo in step 2 in vscode

          Install Cucumber (Gherkin) Full Support (Navigate to Code → Preferences → Extensions)
          create .vscode folder
          under .vscode folder create settings.json file
          Add the following code to settings.json

        {
           "cucumberautocomplete.steps": [
                   "tests/cucumber/stepdefinitions/*.js",
          ],
         "cucumberautocomplete.strictGherkinCompletion": true,
         "cucumberautocomplete.syncfeatures": "test/cucumber/features/*.feature",
        "cucumberautocomplete.strictGherkinValidation": true
       }
       
The above settings is used to navigate from a step in a feature file to the step definition

## Installing packages
vscode → view → Terminal
type "npm install" and press enter

## Feature File 

Feature: A feature would describe the current test script which has to be executed.
Scenario: Scenario describes the steps and expected outcome for a particular test case.
Scenario Outlet: Same scenario can be executed for multiple sets of data using scenario outline.
Given: Specifies the context of the text to be executed
When: Specifies the test action that has to be performed
Then: Expected outcome of the test
Command right click a step and click "Go to Definition" - this will take you to the step definition

## Step Definition Files
Step definition maps the Test Case Steps in the feature files(Given/When/Then) to code.

## Running the Test Scripts

Running Test Scripts
Below is the command to run test scripts. ios prefix implies the tests will be run on an ios simulator/device.

"npm run ios.cucumber.app" - BDD/Cucumber 

## Run for iOS
- Checking config/wdio.ios.app.conf.js, make sure capability is correct
- App is stored in "apps" folder
- xcode should be installed to access the Simulator
- Run by command ```npm run ios.cucumber.app```


## Notes:
- apps folder is included in gitignore, therefore it will not be pushed into repository

This document is under construction, will be kept updating in future.
