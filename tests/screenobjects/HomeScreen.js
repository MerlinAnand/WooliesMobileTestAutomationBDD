import AppScreen from './AppScreen';

const SELECTORS = {
  HOME_SCREEN: '~Home-screen',
  ADD_NEW_EVENT:'~Add-New-Event'
};

 class HomeScreen extends AppScreen {
  constructor() {
    super(SELECTORS.HOME_SCREEN);
  }

  pressAddNewEvent() {
    this.click(SELECTORS.ADD_NEW_EVENT);
  }
  
}
export default new HomeScreen();