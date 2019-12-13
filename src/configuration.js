const configuration =  {
    pageSize: 12
    , api: {
        url: "http://localhost:3000"
    }
    , dataStore: {
        mode: 'mock'
        , url: "https://btvc6sgs9a.execute-api.eu-west-1.amazonaws.com/Prod"
        , collections: {'items': 'testapp-dev-items' }
    }
    , extendedPathSuffix : '/*'
    , itemsPositions : ['first', 'previous', 'next', 'last']
    , branding : {
        name: 'split4ever'
        , address: {
            line1: "1355 Market St, Suite 900"
            , line2: "n.20 dto"
            , postalcode: "1120-001 SBernardo"
            , country: "Portugal"
        }
        , phone: "(123) 456-7890"
        , email: "main@split4ever.com"
    }
};
export default configuration;