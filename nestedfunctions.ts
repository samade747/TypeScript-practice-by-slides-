// nestedfunctions
function outerFunction() {
    console.log("outer function");
    function innerFunction() {
        console.log("inner function");
    }
    innerFunction();
}


outerFunction()

