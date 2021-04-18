import AppScreen from './AppScreen';
import NativeAlert from '../helpers/utilities/NativeAlert';
import { decryptTextFromBase64 } from '../helpers/utilities/utils';

const SELECTORS = {
  REPEAT_CUSTOM_SCREEN: '~Event-screen',
  REPEAT_CUSTOM_CONTAINER_BUTTON: '~button-event-container',
  REPEAT_FREQUENCY_MONTH: '~input-monthly', 
  REPEAT_FREQUENCY_WEEKLY: '~input-daily', 
  REPEAT_FREQUENCY_DAILY: '~input-daily', 
};

class RepeatCustomScreen extends AppScreen {
  constructor() {
    super(SELECTORS.REPEAT_CUSTOM_SCREEN);
  }

  pressEveryRepeatDaily() {
    if (driver.isKeyboardShown()) {
      driver.hideKeyboard();
    }
    this.click(SELECTORS.REPEAT_FREQUENCY_DAILY);
  }

  pressEveryRepeatWeekly() {
    if (driver.isKeyboardShown()) {
      driver.hideKeyboard();
    }
    this.click(SELECTORS.REPEAT_FREQUENCY_WEEKLY);
  }

  pressEveryRepeatMonths() {
    if (driver.isKeyboardShown()) {
      driver.hideKeyboard();
    }
    this.click(SELECTORS.REPEAT_FREQUENCY_MONTH);
  }

}
export default new RepeatCustomScreen();