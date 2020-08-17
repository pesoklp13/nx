import { Linter } from '@nrwl/workspace';
import {
  E2eTestRunner,
  UnitTestRunner,
} from '@nrwl/workspace/src/utils/test-runners';

export interface Schema {
  name: string;
  skipFormat: boolean;
  inlineStyle?: boolean;
  inlineTemplate?: boolean;
  viewEncapsulation?: 'Emulated' | 'Native' | 'None';
  routing?: boolean;
  enableIvy?: boolean;
  prefix?: string;
  style?: string;
  skipTests?: boolean;
  directory?: string;
  tags?: string;
  linter: Linter;
  unitTestRunner: UnitTestRunner;
  e2eTestRunner: E2eTestRunner;
  backendProject?: string;
}
