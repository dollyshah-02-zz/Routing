import { MyWebsiteModule } from './my-website.module';

describe('MyWebsiteModule', () => {
  let myWebsiteModule: MyWebsiteModule;

  beforeEach(() => {
    myWebsiteModule = new MyWebsiteModule();
  });

  it('should create an instance', () => {
    expect(myWebsiteModule).toBeTruthy();
  });
});
