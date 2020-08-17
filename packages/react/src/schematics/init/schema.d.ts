import {
  E2eTestRunner,
  UnitTestRunner,
} from '@nrwl/workspace/src/utils/test-runners';

export interface Schema {
  unitTestRunner: Exclude<UnitTestRunner, typeof UnitTestRunner.Karma>;
  e2eTestRunner: E2eTestRunner;
  skipFormat: boolean;
}
