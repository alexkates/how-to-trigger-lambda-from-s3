import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as HowToTriggerLambdaFromS3 from '../lib/how-to-trigger-lambda-from-s3-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new HowToTriggerLambdaFromS3.HowToTriggerLambdaFromS3Stack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
