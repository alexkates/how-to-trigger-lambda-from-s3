import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';

export class HowToTriggerLambdaFromS3Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'OurBucket', {
      /**
       * The following properties ensure the bucket is properly 
       * deleted when we run cdk destroy */
      autoDeleteObjects: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY
    })
  }
}
