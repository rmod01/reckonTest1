let expect    = require("chai").expect;

describe("My test", function(){
    describe("My test1", function(){
        it("check response", function() {
            let tst  = "result"
            expect(tst).to.equal("result");
        });
    })
})