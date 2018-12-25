
var body         = document.getElementsByTagName('body');
var footer       = document.getElementById('footer');
var status_bar   = document.getElementById('status_bar');
var titlebar = document.getElementById('titlebar');


var nodeMapper = {};

function nodeCounter(node) {

    if(node.children.length) {
        return;
    }

    var tmpNodeName = node.nodeName;
    if(typeof nodeMapper[tmpNodeName] == "undefined") {
        tmpNodeName[tmpNodeName] = 0;
    }

    tmpNodeName[tmpNodeName] = tmpNodeName[tmpNodeName]+1;

    while(node.children.length>0) {

    }
}
