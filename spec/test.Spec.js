describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

describe("A suite is a just a function", function() {
  let a;
  it("and so is a spec", function() {
    a = true;
    expect(a).toBe(true);
  });
});