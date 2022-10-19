"use strict";
var fetchJson;
(function (fetchJson_1) {
    const got = require('got');
    const fetchJson = (url, callBack) => {
        return got(url).then((response) => {
            let result = JSON.parse(response.body);
            callBack(result);
        });
    };
    module.exports = fetchJson;
})(fetchJson || (fetchJson = {}));
