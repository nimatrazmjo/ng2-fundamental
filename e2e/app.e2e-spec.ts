import { Ng2FundamentalPage } from './app.po';

describe('ng2-fundamental App', () => {
  let page: Ng2FundamentalPage;

  beforeEach(() => {
    page = new Ng2FundamentalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
