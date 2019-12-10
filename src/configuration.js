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

};
export default configuration;