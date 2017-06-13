import { SelectBoxesPage } from './app.po';

describe('select-boxes App', () => {
  let page: SelectBoxesPage;

  beforeEach(() => {
    page = new SelectBoxesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
