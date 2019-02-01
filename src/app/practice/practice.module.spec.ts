import { PracticeModule } from './practice.module';

describe('PracticeModule', () => {
  let practiceModule: PracticeModule;

  beforeEach(() => {
    practiceModule = new PracticeModule();
  });

  it('should create an instance', () => {
    expect(practiceModule).toBeTruthy();
  });
});
