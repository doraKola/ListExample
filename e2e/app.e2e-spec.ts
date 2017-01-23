import { NgGirlPage } from './app.po';

describe('ng-girl App', function() {
  let page: NgGirlPage;

  beforeEach(() => {
    page = new NgGirlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
