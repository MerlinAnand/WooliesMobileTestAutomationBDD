import { Given, When, Then } from 'cucumber';
import { TabBar, LoginScreen } from '../../../index';
import { TabBar, HomeScreen } from '../../../index';
import { TabBar, EventScreen } from '../../../index';
import HomeScreen from '../../screenobjects/HomeScreen';
import EventScreen from '../../screenobjects/EventScreen';
import RepeatScreen from '../../screenobjects/EventScreen';
import AddInviteeScreen from '../../screenobjects/AddInviteesScreen';
import EndRepeatScreen from '../../screenobjects/EndRepeatScreen';
const { assert } = require('chai');
const context = require('../../../config/context');

Given(/^I have launched the Calendar App$/, () => {
  HomeScreen.pressAddNewEvent();
});

When(/^It is a working (.*) $/, day => {
  const workingday = context.data[`${day}`];
  EventScreen.waitForIsShown();
  EventScreen.workingday(workingday);
});

Then(/^Meeting is between (.*) to (.*) $/, starttime, endtime => {
  EventScreen.waitForIsShown();
  EventScreen.enterTime(starttime);
  EventScreen.enterTime(endtime);
});

Then(/^I want to book a meeting with the title (.*)$/, meetingtype => {
  AddInviteeScreen.waitForIsShown();
  AddInviteeScreen.enterTitle(meetingtype);
  if (meetingtype == "workshop") {
    RepeatScreen.pressEveryRepeatWeekly  
    EndRepeatScreen.pressEveryRepeatOnDate();
  } else if (meetingtype == "standup"){
    RepeatScreen.pressEveryRepeatDaily  
    EndRepeatScreen.pressRepeatNever();
  }
});

And(/^I invite (.*) of people$/, noofparticipants => {
  AddInviteeScreen.waitForIsShown();
  AddInviteeScreen.INPUT_BUTTON(noofparticipants);
});

And(/^I save the meeting$/,() => {
  EventScreen.waitForIsShown();
  EventScreen.saveEvent();
});

Then(/^I Check if the meeting is created as expected$/,() => {
  EventScreen.waitForIsShown();
});

And(/^Meeting is for (.*) minutes$/,duration => {
  EventScreen.waitForIsShown();
});


