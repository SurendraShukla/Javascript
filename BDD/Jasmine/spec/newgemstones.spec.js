describe("GemStone - Count of gem elements", function(){

    function expectNoOfGemElementsForStones(stones) {
        return {
            toBe :function(expected) {
                expect(NewGemStones(stones).countGemElements()).toBe(expected);
            }
        }
    }

    it("should be zero for no stones", function () {
        expectNoOfGemElementsForStones([]).toBe(0);
    });

    describe("For one stone", function () {

        it("should be one for one element", function () {
            expectNoOfGemElementsForStones(['a']).toBe(1);
        });

        it("shuold be number of elements on the stone", function () {
            expectNoOfGemElementsForStones(['abcd']).toBe(4);
        });

        it("should be distinct number of elements on the stone", function () {
            expectNoOfGemElementsForStones(['abcdab']).toBe(4);
        });
    });

    describe("For two stones", function () {

        it("should be zero for distinct elements", function () {
            expectNoOfGemElementsForStones(['abc', 'xyz']).toBe(0);
        });

        it("should be length for same elements on both the stones", function () {
            expectNoOfGemElementsForStones(['abc', 'abc']).toBe(3);
        });

        it("should be number of common elements", function () {
            expectNoOfGemElementsForStones(['abcd', 'abxyz']).toBe(2);
        });
    });

    describe("For more than two rocks", function () {
        it("should be zero for distinct elements", function () {
            expectNoOfGemElementsForStones(['abc', 'pqr', 'xyz']).toBe(0);
        });

        it('should be number of common elements without repetition ', function () {
            expectNoOfGemElementsForStones(['abc', 'acpqr', 'abxyz']).toBe(1);
        });

        it('should be common number of elements with repetition', function () {
            expectNoOfGemElementsForStones(['abac', 'acpaqr', 'abxyz']).toBe(1);
        });

        it('should be no of common elements with repetition of elements and rocks', function () {
            expectNoOfGemElementsForStones(['abc', 'aac', 'abc']).toBe(2);
        });
    });

});