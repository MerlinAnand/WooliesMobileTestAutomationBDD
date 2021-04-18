import Page from './page';

class EventPage extends Page {
    /**
     * define elements
     */
    get title () { return $('#title'); }
    get location () { return $('#location'); }
    get starttime () { return $('#start input[type=time]'); }
    get endtime () { return $('#start input[type=time]'); }
    get repeat () { return $('#repeat');}
    get invitee () { return $('#invitee');}

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('event');
    }

    submit () {
        browser.hideKeyboard();
        this.addButton.click();
    }
}

export default new EventPage();
