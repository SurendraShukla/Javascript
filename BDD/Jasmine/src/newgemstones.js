'use strict';

function NewGemStones(stones) {

    return {
        countGemElements : function() {
            var allElements = {};

            if (!stones.length) {
                return 0;
            }

            stones.forEach(function(stone, index) {
                var elements = stone.split('');
                elements.forEach(function(element) {
                    if (allElements[element] === undefined) {
                        allElements[element] = [];
                    }
                    if(allElements[element].indexOf(index) === -1) {
                        allElements[element].push(index);
                    }
                });
            });

            return Object.keys(allElements).filter(function(element) {
                return allElements[element].length === stones.length;
            }).length;
        }
    }
}

