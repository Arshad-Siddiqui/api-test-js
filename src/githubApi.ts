class GithubApi {
  fetchRepositoryData (repo: string, callBack: Function) {
    const got = require('got');
    const url = `https://api.github.com/repos/${repo}`;
    return got(url).then((response: {body: string}) => {
        let json = JSON.parse(response.body);
        return callBack(json);
    });
  }
}

module.exports = GithubApi;