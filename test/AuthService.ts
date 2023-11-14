import { type CognitoUser } from '@aws-amplify/auth';
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers';
import { Amplify, Auth } from 'aws-amplify';

const awsRegion = 'eu-west-2'

Amplify.configure({
    Auth: {
        region: awsRegion,
        userPoolId: 'eu-west-2_j4HZmxnth',
        userPoolWebClientId: '7dnt3se53skm6jjutnbe5f25au',
        identityPoolId: 'eu-west-2:12bb87f7-7aeb-4b90-ad22-1a20ded0f350',
        authenticationFlowType: 'USER_PASSWORD_AUTH'
    }
});



export class AuthService {


    public async login(userName: string, password: string) {
        const result = await Auth.signIn(userName, password) as CognitoUser;
        return result;
    }
    public async generateTemporaryCredentials(user: CognitoUser) {
        const jwtToken = user.getSignInUserSession().getIdToken().getJwtToken();
        const cognitoIdentityPool = `cognito-idp.${awsRegion}.amazonaws.com/eu-west-2_j4HZmxnth`;
        const cognitoIdentity = new CognitoIdentityClient({
            credentials: fromCognitoIdentityPool({
                identityPoolId: 'eu-west-2:12bb87f7-7aeb-4b90-ad22-1a20ded0f350',
                logins: {
                    [cognitoIdentityPool]: jwtToken
                }
            })
        });
        const credentials = await cognitoIdentity.config.credentials();
        return credentials;
    }
}