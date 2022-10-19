"use strict";
class Github {
    constructor(api) {
        this.api = api;
        this.repoData = {};
    }
    fetch(url) {
        this.repoData = this.api.fetchRepositoryData(url, (response) => response);
    }
    getRepoData() {
        return this.repoData;
    }
}
module.exports = Github;
