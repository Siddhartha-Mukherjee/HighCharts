import { HighchartPage } from './app.po';

describe('highchart App', function() {
  let page: HighchartPage;

  beforeEach(() => {
    page = new HighchartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
