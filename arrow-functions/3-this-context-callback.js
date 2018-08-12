
var globalVar = 1;
function outerFun() {
    this.skipNumberList = [2, 4];
    this.innerFun = function () {
        // console.log(this);
        // setTimeout(function(){console.log(this);}, 200);

        var outputArr = [1,2,3,4].filter(val => {
            if(this.skipNumberList.includes(val)) {
                return false;
            }
            return true;
        });
        console.log(outputArr);

        [1,2,3,4].filter(skipElement);
    }
}

function skipElement(val) {
    console.log(this);
    if(this.skipNumberList.includes(val)) {
        return false;
    }
    return true;
}

obj = new outerFun();
obj.innerFun();
