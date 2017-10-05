describe("Bracket Parser suite",function(){

    var bracketValidatorTobe = function (input, expected) {
        var result = BracketParser(input).valid();
        expect(result).toBe(expected);
    };
    describe("basic validation with single bracket",function(){
        it("should return true for blank input",function(){
            bracketValidatorTobe("", true);
        });
        it("should return true for string as input", function () {
            bracketValidatorTobe("abc", true);
        });
        it("should return false for string with open Bracket as input", function () {
            bracketValidatorTobe("{abc", false);
        });
        it("should return true for String with opena and close bracket", function () {
            bracketValidatorTobe("{abc}",true);
        });
        it("should return for false for only closing bracket", function () {
            bracketValidatorTobe("}",false);
        });
        it("Should return false for wrong bracket sequence", function () {
            bracketValidatorTobe("}{",false);
        });
    });
    describe("Validator for multiple bracket", function () {
        it("Should true for two open and two close bracket", function () {
            bracketValidatorTobe("{{}}",true);
        });
        it("should false for two open and one close bracket", function () {
            bracketValidatorTobe("{{}",false);
        });
        it("should false for two close and two open bracket", function () {
            bracketValidatorTobe("}}{{",false);
        });
        it("should false for two close and two open bracket", function () {
            bracketValidatorTobe("{}asdasd{asdasd}{sadas}",true);
        });
        it("Should true for thrice open and two thrice bracket", function () {
            bracketValidatorTobe("{{{aaa}}}",true);
        });
    });
    describe("mutliple type of brackets", function () {
        it("should return true for Two open ann two close of differnt type as input", function () {
            bracketValidatorTobe("{()}",true);
        });
        it("should return false for two open and one close as input", function () {
            bracketValidatorTobe('{(}',false);
        });
        fit("should return false for two open and two close as input", function () {
            bracketValidatorTobe('{((())}',false);
        });
    });
});