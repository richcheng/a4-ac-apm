import { A4AcApmPage } from './app.po';

describe('a4-ac-apm App', () => {
  let page: A4AcApmPage;

  beforeEach(() => {
    page = new A4AcApmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
