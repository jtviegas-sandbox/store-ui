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
        , about : {
            text: 'This is a wider card with supporting text below as a natural\n' +
                '\t\t\t\t\t\t\t\t\tlead-in to additional content. This content is a little bit longer. bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla v bla bla bla bla v bla bla bla bla vbla bla bla bla'
            , signature: 'jonathan the one'
        }
        , privacy: {
            text: "As mentioned in the Kubernetes documentation, you will be deploying a simple, multi-tier web application. You know it is a good sign for a platform when the documentation says it is a simple application that has master/slave backends and a scalable fronted. The guest book solution is also categorized as a stateless application because the frontend doesn\'t store any state. It is stateful for the single instance of Redis master, which stores all the guestbook entries."
        }
        , contacts: {
            mapsrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5634267001287!2d-122.41856418468814!3d37.77683367975901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6a387b9b%3A0xeff4041228f95f9c!2sMarket%20Square%2C%201355%20Market%20St%20%23900%2C%20San%20Francisco%2C%20CA%2094103%2C%20USA!5e0!3m2!1sen!2sdk!4v1576273964298!5m2!1sen!2sdk"
        }
    }
};
export default configuration;