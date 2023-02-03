import GoTrue from 'gotrue-js';

// Instantiate the GoTrue auth client with an optional configuration

auth = new GoTrue({
    APIUrl: 'https://domaeae-wip.netlify.app/.netlify/identity',
    audience: '',
    setCookie: false,
});