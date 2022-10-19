"use strict";
const fetchJson = (url, callBack) => {
    const got = require('got');
    return got(url).then((response) => {
        let result = JSON.parse(response.body);
        return callBack(result);
    });
};
module.exports = fetchJson;
