import { PracticeRoutingModule } from './practice-routing.module';

describe('PracticeRoutingModule', () => {
  let practiceRoutingModule: PracticeRoutingModule;

  beforeEach(() => {
    practiceRoutingModule = new PracticeRoutingModule();
  });

  it('should create an instance', () => {
    expect(practiceRoutingModule).toBeTruthy();
  });
});
