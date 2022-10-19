  const fetchRepositoryInfo = (repoName: string, callBack: Function) => {
    const got = require('got')
    const url: string = `https://api.github.com/repos/${repoName}`

    return got(url).then((response: { body:string }) => {
      let json: JSON = JSON.parse(response.body)
      return callBack(json)
    })
  }
  module.exports = fetchRepositoryInfo

  fetchRepositoryInfo('sinatra/sinatra', (receivedResponse: JSON) => {
    console.log(receivedResponse);
  });