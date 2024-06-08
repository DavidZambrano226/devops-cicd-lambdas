describe("Index Hello Test", () => {
  const indexToTest = require("../src/index-hello-world");
  it("Hello World", async () => {
    const response = await indexToTest.handler();
    expect(response).toEqual({
      statusCode: 200,
      body: '{"message":"Hello World from Lambda!"}',
    });
  });
});
