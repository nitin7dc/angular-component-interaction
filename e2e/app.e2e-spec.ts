import { AngularComponentInteractionPage } from './app.po';

describe('angular-component-interaction App', () => {
  let page: AngularComponentInteractionPage;

  beforeEach(() => {
    page = new AngularComponentInteractionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
