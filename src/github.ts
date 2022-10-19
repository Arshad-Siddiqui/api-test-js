class Github {
  api: {fetchRepositoryData: Function};
  repoData: {};

  constructor(api: {fetchRepositoryData: Function}) {
    this.api = api;
    this.repoData = {};
  }

  fetch (url: string) {
    this.repoData = this.api.fetchRepositoryData(url, (response: JSON) => response)
  }

  getRepoData () {
    return this.repoData;
  }
}

module.exports = Github;