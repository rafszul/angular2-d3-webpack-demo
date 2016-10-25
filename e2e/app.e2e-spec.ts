import { Angular2D3WebpackDemoPage } from './app.po';

describe('angular2-d3-webpack-demo App', function() {
  let page: Angular2D3WebpackDemoPage;

  beforeEach(() => {
    page = new Angular2D3WebpackDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
