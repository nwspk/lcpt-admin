const config = {
    development: {
        api: 'http://lcpt.local:12180'
    },
    production: {
        api: 'https://lcpt-api.herokuapp.com'
    }
};

const environment = window.location.host.includes('localhost') ? 'development' : 'production';

export default config[environment];
