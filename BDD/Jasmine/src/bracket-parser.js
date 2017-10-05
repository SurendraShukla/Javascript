'use strict'

function BracketParser(input) {
    return {
        valid : function () {
        if(input != undefined && input == "") {
            return true;
        } else if(input.length > 0){
            return validateString(input);
        }
            return false;


        function validateString(input) {

            var typeOfBrackets = ['{','}', '(', ')'];
            var opening = ['{', '('];
            var closing = ['}', ')'];

            var counters = {curly : 0, square: 0};

            var checkBracketPresent = function() {
                var flag = false;
                typeOfBrackets.forEach(function(bracket){
                    if(input.indexOf(bracket) >= 0) {
                        flag = true;
                        return;
                    }
                });
                return flag;
            };

            var isOpeningBracket = function(c) {
                var flag = false;
                opening.forEach(function(bracket){
                    if(bracket === c) {
                        flag = true;
                        return;
                    }
                });
                return flag;
            };

            var isClosingBracket = function(c) {
                var flag = false;
                closing.forEach(function(bracket){
                    if(bracket === c) {
                        flag = true;
                        return;
                    }
                });
                return flag;
            };

            var incrementCounter = function(c) {
                switch(c) {
                    case '{':
                        counters.curly ++;
                        break;
                    case '(':
                        counters.square ++;
                        break;
                }
            };

            var decrementCounter = function(c) {
                switch(c) {
                    case '}':
                        counters.curly --;
                        break;
                    case ')':
                        counters.square --;
                        break;
                }
            };

            var getCounter = function(c) {
                console.log('getCounter' + counters.curly + '' + counters.square)
                switch(c) {
                    case '{':
                    case '}':
                        return counters.curly;
                    case '(':
                    case ')':
                        return counters.square;
                }
            };

            var checkAllCounters = function(c) {
                return counters.curly === 0 && counters.square === 0;
            };


            var checkForBracketSequence = function () {
                var openingWithoutClosingOcurred = false;
                var closingWithoutOpeningOcurred = false;

                var characters = input.split('');

                characters.forEach(function(c) {
                    if(!openingWithoutClosingOcurred && !closingWithoutOpeningOcurred) {
                        if (isOpeningBracket(c) && getCounter(c) >= 0) {
                            incrementCounter(c);
                        } else if (isOpeningBracket(c)) {
                            openingWithoutClosingOcurred = true;
                        }
                        else if (isClosingBracket(c) && getCounter(c) > 0) {
                            decrementCounter(c);
                        } else if (isClosingBracket(c)) {
                            closingWithoutOpeningOcurred = true;
                        }
                    }
                });

                return checkAllCounters() && !openingWithoutClosingOcurred && !closingWithoutOpeningOcurred;
            };

            if(checkBracketPresent())
                return checkForBracketSequence();
            return true;
        }

    }


    }
}