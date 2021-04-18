
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
- Install appium-desktop and configure the jdk in java home in appium
- Open the emulator and run the command ```adb devices``` for android
- Open terminal in visual code and install ```npm install```
- Need not start the appium server explicitely 


## Run for iOS
- Checking config/wdio.ios.app.conf.js, make sure capability is correct
- App is stored in "apps" folder
- xcode should be installed to access the Simulator
- Run by command ```npm run ios.cucumber.app```



## Notes:
- apps folder is included in gitignore, therefore it will not be pushed into repository

This document is under construction, will be kept updating in future.
