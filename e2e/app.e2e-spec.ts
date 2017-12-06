import { CProjectPage } from './app.po';

describe('c-project App', () => {
  let page: CProjectPage;

  beforeEach(() => {
    page = new CProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
