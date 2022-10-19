"use strict";
class GithubApi {
    fetchRepositoryData(repo, callBack) {
        const got = require('got');
        const url = `https://api.github.com/repos/${repo}`;
        return got(url).then((response) => {
            let json = JSON.parse(response.body);
            return callBack(json);
        });
    }
}
module.exports = GithubApi;
