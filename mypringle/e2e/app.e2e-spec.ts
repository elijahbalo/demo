import { MypringlePage } from './app.po';

describe('mypringle App', () => {
  let page: MypringlePage;

  beforeEach(() => {
    page = new MypringlePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
