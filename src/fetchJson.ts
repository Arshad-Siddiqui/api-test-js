namespace fetchJson {
const got = require('got');

const fetchJson = (url: string, callBack: Function) => {
  return got(url).then((response: {body: string}) => {
    let result: JSON = JSON.parse(response.body)
    callBack(result)
  })
}

// fetchJson('https://jsonplaceholder.typicode.com/todos', (response: JSON) => {
  // console.log(response);
// })

module.exports = fetchJson
}