import AppScreen from './AppScreen';
import NativeAlert from '../helpers/utilities/NativeAlert';
import { decryptTextFromBase64 } from '../helpers/utilities/utils';

const SELECTORS = {
  EVENT_SCREEN: '~Event-screen',
  EVENT_CONTAINER_BUTTON: '~button-event-container',
  TITLE: '~input-title',
  EVENTADD_BUTTON: '~addbutton-EVENT',
  SIGN_UP_BUTTON: '~button-SIGN UP',
  TITLE: '~input-title',
  LOCATION: '~input-location',
  START: '~input-start',
  START_TIME: '~input-start-time',
  AM: '~input-am',
  PM: '~input-pm',
  END: '~input-end',
  END_TIME: '~input-end-time',
  REPEAT: 'input-repeat',
  END_REPEAT: 'input-end-repeat',
  INVITE: '~button-custom',
  SAVE: '~button-save'
};

class EventScreen extends AppScreen {
  constructor() {
    super(SELECTORS.EventScreen);
  }

  get eventContainerButon() {
    return $(SELECTORS.EVENT_CONTAINER_BUTTON);
  }

  get signUpContainerButon() {
    return $(SELECTORS.SIGN_UP_CONTAINER_BUTTON);
  }

  get eventButton() {
    return $(SELECTORS.EVENT_BUTTON);
  }

  get signUpButton() {
    return $(SELECTORS.SIGN_UP_BUTTON);
  }

  get title() {
    return $(SELECTORS.TITLE);
  }

  get location() {
    return $(SELECTORS.LOCATION);
  }

  get start() {
    return $(SELECTORS.START);
  }

  get alert() {
    return NativeAlert;
  }

  enterTitle(title) {
    this.setValue(SELECTORS.TITLE, user.title);
  }

  enterLocation(location) {
    this.setValue(SELECTORS.LOCATION, user.location);
  }

  pressStart() {
    this.click(SELECTORS.START);
  }

  enterStartTime(time) {
    this.setValue(SELECTORS.START_TIME, user.starttime);
  }

  pressEnd() {
    this.click(SELECTORS.END);
  }

  enterEndTime(endtime) {
    this.setValue(SELECTORS.END_TIME, user.endtime);
  }
  
  pressAM() {
    this.click(SELECTORS.AM);
  }

  pressPM() {
    this.click(SELECTORS.PM);
  }

  pressRepeat() {
    this.click(SELECTORS.REPEAT);
  }

  pressEndRepeat() {
    this.click(SELECTORS.END_REPEAT);
  }

  pressInvitees() {
    this.click(SELECTORS.INVITE);
  }

  saveEvent(){
     this.click(SELECTORS.SAVE);
  }

}
export default new EventScreen();