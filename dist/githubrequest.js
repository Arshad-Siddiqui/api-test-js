"use strict";
const got = require('got');
const url = 'https://api.github.com/repos/sinatra/sinatra';
got(url)
    .then((response) => {
    console.log(response.body);
});
