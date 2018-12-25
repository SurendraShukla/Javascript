let x = 'outer value';
(function() {
    // start TDZ for x
    console.log(x);
    let x = 'inner value'; // declaration ends TDZ for x
}());
