import AppScreen from './AppScreen';
import NativeAlert from '../helpers/utilities/NativeAlert';
import { decryptTextFromBase64 } from '../helpers/utilities/utils';

const SELECTORS = {
  END_REPEAT_CUSTOM_SCREEN: '~Event-screen',
  END_REPEAT_CUSTOM_CONTAINER_BUTTON: '~button-event-container',
  END_REPEAT_NEVER: '~input-never', 
  END_REPEAT_ONDATE:'~input-ondate'
};

class EndRepeatScreen extends AppScreen {
  constructor() {
    super(SELECTORS.END_REPEAT_CUSTOM_SCREEN);
  }

  pressRepeatNever() {
    this.click(SELECTORS.END_REPEAT_NEVER);
  }

  pressEveryRepeatOnDate() {
    this.click(SELECTORS.END_REPEAT_ONDATE);
  }

}
export default new EndRepeatScreen();