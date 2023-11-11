import { type CognitoUser } from '@aws-amplify/auth';
import { Amplify, Auth } from 'aws-amplify';

const awsRegion = 'eu-west-2'

Amplify.configure({
    Auth: {
        region: awsRegion,
        userPoolId: 'eu-west-2_j4HZmxnth',
        userPoolWebClientId: '7dnt3se53skm6jjutnbe5f25au',
        authenticationFlowType: 'USER_PASSWORD_AUTH'
    }
});



export class AuthService {


    public async login(userName: string, password: string) {
        const result = await Auth.signIn(userName, password) as CognitoUser;
        return result;
    }
}