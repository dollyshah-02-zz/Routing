import { LazyRoutingModule } from './lazy-routing.module';

describe('LazyRoutingModule', () => {
  let lazyRoutingModule: LazyRoutingModule;

  beforeEach(() => {
    lazyRoutingModule = new LazyRoutingModule();
  });

  it('should create an instance', () => {
    expect(lazyRoutingModule).toBeTruthy();
  });
});
