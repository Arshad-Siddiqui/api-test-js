const Github = require('../github')
const fakeApi = {
  fetchRepositoryData (string , func) {
    return { thisIsATestObject: 'Yeah it really is'}
  }
}

describe('Github', () => {
  describe('.fetch', () => {
    it('saves the repo data', () => {      
      const github = new Github(fakeApi)
      github.fetch('coolwebsite.org')
      expect(github.getRepoData()).toEqual({ thisIsATestObject: 'Yeah it really is'})
    })
  })
})