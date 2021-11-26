const { AwsCdkConstructLibrary } = require('projen');

const PROJECT_NAME = 'cdk-sample-lib' ;

const project = new AwsCdkConstructLibrary({
  author: 'jingood2',
  authorAddress: 'jingood2@gmail.com',
  cdkVersion: '1.134.0',
  defaultReleaseBranch: 'main',
  name: 'awscdk-construct',
  repositoryUrl: 'https://github.com/jingood2/awscdk-construct.git',

  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-apigatewayv2',
    '@aws-cdk/aws-apigatewayv2-integrations',
    '@aws-cdk/aws-lambda',
  ], /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */
  python: {
    distName: PROJECT_NAME,
    module: 'cdk_sample_lib',
  },
  // cdkTestDependencies: undefined,  /* AWS CDK modules required for testing. */
  // deps: [],                        /* Runtime dependencies of this module. */
  // description: undefined,          /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                     /* Build dependencies for this module. */
  // packageName: undefined,          /* The "name" in package.json. */
  // release: undefined,              /* Add release management to this project. */
});
project.synth();