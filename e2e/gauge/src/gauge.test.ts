import {
  checkFilesExist,
  ensureProject,
  forEachCli,
  readJson,
  runCLI,
  uniq,
} from '@nrwl/e2e/utils';

forEachCli((currentCLIName) => {
  const linter = currentCLIName === 'angular' ? 'tslint' : 'eslint';
  const nrwlPackageName = currentCLIName === 'angular' ? 'angular' : 'react';

  describe('Gauge E2E runner', () => {
    describe('Project scaffolding', () => {
      const TIMEOUT = 1000000;

      it(
        'should generate an app with the Gauge as e2e test runner',
        () => {
          ensureProject();
          const myapp = uniq('myapp');
          console.log(
            `generating @nrwl/${nrwlPackageName}:app ${myapp} with gauge e2e test runner`
          );
          runCLI(
            `generate @nrwl/${nrwlPackageName}:app ${myapp} --e2eTestRunner=gauge --linter=${linter}`
          );

          // Making sure the package.json file contains the Cypress dependency
          const packageJson = readJson('package.json');
          expect(packageJson.devDependencies['@getgauge/cli']).toBeTruthy();
          expect(packageJson.devDependencies['gauge-ts']).toBeTruthy();

          // Making sure the cypress folders & files are created
          checkFilesExist(`apps/${myapp}-e2e/env/default/default.properties`);
          checkFilesExist(`apps/${myapp}-e2e/env/default/ts.properties`);

          checkFilesExist(`apps/${myapp}-e2e/specs/example.spec`);
          checkFilesExist(`apps/${myapp}-e2e/src/StepImplementation.ts`);

          checkFilesExist(`apps/${myapp}-e2e/manifest.json`);
        },
        TIMEOUT
      );

      it(
        'should generate a express app with Gauge as functional test runner',
        () => {
          // TODO@PeSok add support for express
        },
        TIMEOUT
      );

      it(
        'should generate a nest app with Gauge as functional test runner',
        () => {
          // TODO@PeSok add support for nest
        },
        TIMEOUT
      );
    });
  });
});
