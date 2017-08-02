import { Bootcamp32Page } from './app.po';

describe('bootcamp32 App', () => {
  let page: Bootcamp32Page;

  beforeEach(() => {
    page = new Bootcamp32Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
