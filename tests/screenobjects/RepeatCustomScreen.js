import AppScreen from './AppScreen';
import NativeAlert from '../helpers/utilities/NativeAlert';
import { decryptTextFromBase64 } from '../helpers/utilities/utils';

const SELECTORS = {
  REPEAT_SCREEN: '~Event-screen',
  REPEAT_CONTAINER_BUTTON: '~button-event-container',
  CUSTOM: '~input-custom', 
};

class RepeatScreen extends AppScreen {
  constructor() {
    super(SELECTORS.REPEAT_SCREEN);
  }

  get start() {
    return $(SELECTORS.CUSTOM);
  }

  pressCustom() {
    if (driver.isKeyboardShown()) {
      driver.hideKeyboard();
    }
    this.click(SELECTORS.CUSTOM);
  }
}
export default new RepeatScreen();