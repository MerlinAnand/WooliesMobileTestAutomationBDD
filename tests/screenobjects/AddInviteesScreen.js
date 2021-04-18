import NativeAlert from '../helpers/utilities/NativeAlert';
import Picker from '../helpers/utilities/Picker';
import { getTextOfElement } from '../helpers/utilities/utils';
// eslint-disable-next-line import/no-unresolved
import AppScreen from './AppScreen';

const SELECTORS = {
  INVITES_SCREEN: '~Forms-screen',
  INPUT_BUTTON: '~plus-icon',
  INPUT_TEXT: '~input-text-search',
  DONE_BUTTON: '~input-done-btn'
};

class InviteScreen extends AppScreen {
  constructor() {
    super(SELECTORS.INVITES_SCREEN);
  }

  get INPUT_BUTTON(participants) {
    return $(SELECTORS.INPUT_BUTTON);
  }

  get INPUT_TEXT() {
    return $(SELECTORS.INPUT_TEXT);
  }

  pressDone() {
    this.click(SELECTORS.DONE_BUTTON);
  }
  
}
export default new InviteScreen();