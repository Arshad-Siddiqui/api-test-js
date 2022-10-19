const GithubApi = require('../githubApi')

describe('GithubApi', () => {
  describe('.fetchRepositoryData', () => {
    it('returns the JSON details from that Github repo', () => {
      const api = new GithubApi()
      api.fetchRepositoryData('sinatra/sinatra', (responseData) => {
        expect(responseData['allow_forking']).toEqual(true)
        expect(responseData['disabled']).toEqual(false)
      })
    })
  })
})