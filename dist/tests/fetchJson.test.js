const fetchJson = require("../fetchJson");

describe("#fetchJson", () => {
  it("returns an Array when api returns an array", () => {
    fetchJson("https://jsonplaceholder.typicode.com/todos", (response) => {
      expect(response).toBeInstanceOf(Array);
      expect(response[0]).toEqual( { userId: 1, id: 1, title: 'delectus aut autem', completed: false })
    });
  });
});
