const app =  {
    pageSize: 12
    , api: {
        url: "http://localhost:3000"
    }
    , dataStore: {
        mode: 'mock'
        , url: "https://5vg511g9v9.execute-api.eu-west-1.amazonaws.com/dev/entities/split4ever"
        , collections: {'items': 'split4ever-dev-items' }
    }
    , extendedPathSuffix : '/*'
    , itemsPositions : ['first', 'previous', 'next', 'last']
    , auth: {
        cognito : {
            ClientId : '7ptht8bvkm7csabv8icvlv9j2u', // Your client id here
            AppWebDomain : 'storeusers.auth.eu-west-1.amazoncognito.com',
            TokenScopesArray : ['phone', 'email', 'profile','openid', 'aws.cognito.signin.user.admin'], //['phone', 'email', 'profile','openid', 'aws.cognito.signin.user.admin']
            RedirectUriSignIn : 'http://localhost:3000',
            RedirectUriSignOut : 'http://localhost:3000',
            //IdentityProvider : 'Facebook',
            UserPoolId : 'eu-west-1_3KDAFOlDw', // Your user pool id here
            //AdvancedSecurityDataCollectionFlag : true
        }
    }
    , headerImageFile: "assets/branding/header.png"
};

export default app;