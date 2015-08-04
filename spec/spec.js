var code = require('../js/utility.js');

describe("Calculating the tip", function(){
  it("calculate the tip", function(){
    expect(code.calculateTip(100,10)).toEqual(10);
  });
});

// describe('', function() {
//   it('', function() {

//   });
// });

describe ("Calculating the tax", function (){
  it("calculate the tax", function(){
    expect(code.calculateTax(100,10)).toEqual(10);
  });
});
