import { externalSchematic, Rule } from '@angular-devkit/schematics';
import {
  E2eTestRunner,
  UnitTestRunner,
} from '@nrwl/workspace/src/utils/test-runners';

/**
 * Calls init _if_ the package does not already exist
 */
export function addPackageWithInit(
  packageName: string,
  testRunners: {
    unitTestRunner: UnitTestRunner;
    e2eTestRunner?: E2eTestRunner;
  } = {
    unitTestRunner: UnitTestRunner.Jest,
    e2eTestRunner: E2eTestRunner.Cypress,
  }
): Rule {
  return externalSchematic(packageName, 'init', { ...testRunners });
}
