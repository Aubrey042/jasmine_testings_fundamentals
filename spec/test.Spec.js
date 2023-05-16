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

describe("The 'toBe' matcher compares with ===", function(){
  it("and has a positive case", function(){
    expect(true).toBe(true);
  });

  it("and can have a negative case", function() {
    expect(false).not.toBe(true);
  });
});

describe("A suite with some shared setup", function() {
  let foo = 0;
  beforeEach(function() {
    foo += 1;
  });

  
  afterEach(function() {
    foo = 0;
  });
  
  beforeAll(function() {
    foo = 1;
  });
  
  afterAll(function() {
    foo = 0;
  });

  it("can be", function(){ // This is here to make this suite pass
    expect(foo).toBe(2);
  });
});

