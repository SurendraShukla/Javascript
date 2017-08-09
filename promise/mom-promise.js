/* ES5, using Bluebird */
// var isMomHappy = Math.random() >= 0.5;
var isMomHappy = 1;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            console.log(1);
            setTimeout(function () {
                console.log(2);
                resolve(phone);
            }, 5000);
        } else {
            var reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);
//
// // 2nd promise
// var showOff = function (phone) {
//     var message = 'Hey friend, I have a new ' +
//         phone.color + ' ' + phone.brand + ' phone';
//
//     return Promise.resolve(message);
// };
//
// // call our promise
// var askMom = function () {
//     willIGetNewPhone
//         .then(showOff) // chain it here
//         .then(function (fulfilled) {
//             // yay, you got a new phone
//             console.log(fulfilled);
//         })
//         .catch(function (error) {
//             // ops, mom don't buy it
//             console.log(error.message);
//         });
// }

// askMom();

// willIGetNewPhone
//     .then(res => {
//         console.log('1'+res.brand);
//     });
//
// willIGetNewPhone
//     .then(res => {
//         console.log('2'+res.brand);
//     });
