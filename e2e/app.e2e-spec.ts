import { LoginAppPage } from './app.po';

describe('login-app App', function() {
  let page: LoginAppPage;

  beforeEach(() => {
    page = new LoginAppPage();
  });

  it('should have login panel element', () => {
    page.navigateTo();
    expect(page.hasLoginPanel()).toBeTruthy();
  });
});
