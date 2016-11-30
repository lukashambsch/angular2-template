import { browser, element, by } from 'protractor';

export class LoginAppPage {
  navigateTo() {
    return browser.get('/login');
  }

  hasLoginPanel() {
    return element(by.css('.login-panel')).isDisplayed();
  }
}
