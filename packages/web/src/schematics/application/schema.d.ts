import { Linter } from '@nrwl/workspace';
import {
  E2eTestRunner,
  UnitTestRunner,
} from '@nrwl/workspace/src/utils/test-runners';

export interface Schema {
  name: string;
  prefix?: string;
  style?: string;
  skipFormat: boolean;
  directory?: string;
  tags?: string;
  unitTestRunner: Exclude<UnitTestRunner, typeof UnitTestRunner.Karma>;
  e2eTestRunner: E2eTestRunner;
  linter: Linter;
}
