import { FromyoutubePage } from './app.po';

describe('fromyoutube App', function() {
  let page: FromyoutubePage;

  beforeEach(() => {
    page = new FromyoutubePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
