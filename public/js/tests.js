var hi = require('./hi.js');
var expect = require('chai').expect;
describe("test", function(){
  it("returns true", function(){
    expect(hi()).to.eq('dog');
  });
});
