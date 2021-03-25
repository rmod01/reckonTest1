const performOperationAndRespond = require("../src/index");
let assert = require('chai').assert;

describe("Common Factor", function(){
    describe("45 can be wholely divided by 3, 5, 9", function(){
        it('Response for 45 should have all the translate names BossHoggFoggie for 3, 5 and 9', () => {
            // assert.equal(2,3);
            let resStr = performOperationAndRespond(
                [{
                    lower: 1,
                    upper: 100
                },{
                    outputDetails: [
                    {
                        divisor: 3,
                        output: "Boss"
                    },
                    {
                        divisor: 5,
                        output: "Hogg"
                    },
                    {
                        divisor: 9,
                        output: "Foggie"
                    },
                  ]
                }]
            )
            assert.equal(resStr.substring(resStr.search("45:")+4,resStr.search("45:")+4 + 14), "BossHoggFoggie");
          });
    }),
    describe("Negative numbers division for remainder calculation", function(){
        it('should not have impact on remainder calculation', () => {
            // assert.equal(2,3);
            let resStr = performOperationAndRespond(
                [{
                    lower: -6,
                    upper: 72
                },{
                    outputDetails: [
                    {
                        divisor: 3,
                        output: "Boss"
                    },
                    {
                        divisor: 5,
                        output: "Hogg"
                    },
                    {
                        divisor: 9,
                        output: "Foggie"
                    },
                  ]
                }]
            )
            assert.equal(resStr.substring(resStr.search("45:")+4,resStr.search("45:")+4 + 14), "BossHoggFoggie");            
          });
    }),
    describe("Divisor number out of range ", function(){
        it('should not have impact on remainder calculation', () => {
            // assert.equal(2,3);
            let resStr = performOperationAndRespond(
                [{
                    lower: -6,
                    upper: 45
                },{
                    outputDetails: [
                    {
                        divisor: 55,
                        output: "Boss"
                    },
                    {
                        divisor: 3,
                        output: "Hogg"
                    },
                    {
                        divisor: 18,
                        output: "Foggie"
                    },
                  ]
                }]
            )
            assert.equal(resStr.substring(resStr.search("45:")+4,resStr.search("45:")+4 + 4), "Hogg");            
          });
    })
})