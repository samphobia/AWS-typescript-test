import { Stack, StackProps } from 'aws-cdk-lib'
import { LambdaIntegration } from 'aws-cdk-lib/aws-apigateway'
import { Function as LambdaFunction, Runtime } from 'aws-cdk-lib/aws-lambda'
import { Code } from 'aws-cdk-lib/aws-lambda'
import { Construct } from 'constructs'
import { join } from 'path'

export class LambdaStack extends Stack {

  public readonly helloLamndaIntegration: LambdaIntegration

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    const helloLambda = new LambdaFunction(this, 'HelloLambda', {
      runtime: Runtime.NODEJS_18_X,
      handler: 'hello.main',
      code: Code.fromAsset(join(__dirname, '..', '..', 'services'))
    })

    this.helloLamndaIntegration = new LambdaIntegration(helloLambda)
  }
}