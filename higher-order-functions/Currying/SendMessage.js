var sendMessage = function(from, to, text) {
    return '@' + to + ': ' + text + ' - ' + from;
};

sendMessage('Surendra','DAP Team','Hi to all');


var mailCurry = function(from) {
    return function(to) {
        return function(text){
            return '@' + to + ': ' + text + ' - ' + from;
        };
    };
};

var mailFromSurendra = mailCurry('Surendra');
var mailFromSurendraToDAP = mailFromSurendra('DAP Team');
mailFromSurendraToDAP('Hi to all');

mailCurry('Surendra')('DAP Team')('Hi to all');