import { AppPathfinderGenPage } from './app.po';

describe('app-pathfinder-gen App', () => {
  let page: AppPathfinderGenPage;

  beforeEach(() => {
    page = new AppPathfinderGenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
