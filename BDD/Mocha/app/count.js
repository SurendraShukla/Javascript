exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers = {
    count: function (start, end) {

        this.delayCounter;
        var counter = start;

        console.log(counter);
        function myLoop() {
            return setTimeout(function () {
                console.log(++counter);
                if (counter < end) {
                    myLoop();
                }
            }, 100);
        }
        this.delayCounter = myLoop();

        this.cancel = function () {
            clearTimeout(this.delayCounter);
        }

        return this;
    }
};
