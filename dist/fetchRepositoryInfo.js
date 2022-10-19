"use strict";
const fetchRepositoryInfo = (repoName, callBack) => {
    const got = require('got');
    const url = `https://api.github.com/repos/${repoName}`;
    return got(url).then((response) => {
        let json = JSON.parse(response.body);
        return callBack(json);
    });
};
module.exports = fetchRepositoryInfo;
fetchRepositoryInfo('sinatra/sinatra', (receivedResponse) => {
    console.log(receivedResponse);
});
