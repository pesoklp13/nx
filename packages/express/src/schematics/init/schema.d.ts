import { UnitTestRunner } from '@nrwl/workspace/src/utils/test-runners';

export interface Schema {
  unitTestRunner: Exclude<UnitTestRunner, typeof UnitTestRunner.Karma>;
  skipFormat: boolean;
}
