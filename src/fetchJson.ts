const fetchJson = (url: string, callBack: Function) => {
  const got = require('got');
  return got(url).then((response: {body: string}) => {
    let result: JSON = JSON.parse(response.body)
    return callBack(result)
  })
}

module.exports = fetchJson

// fetchJson('https://jsonplaceholder.typicode.com/todos', (response: JSON) => {
  // console.log(response);
// })