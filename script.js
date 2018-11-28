//Task3
function deepTimeout(){
    function helloWorld(){
        alert('10 seconds has passed');
    }
    setTimeout(helloWorld, 10000);
}
//Task4
async function internalPromise() {
    let promise = new Promise((resolve, reject) => {
        deepTimeout();
    });
    alert("Prom One");
    return promise;
}

async function externalPromise() {
    let promise = new Promise((resolve, reject) => {
        let result = internalPromise();
    });
    alert("Start Task3?");
    let result = await promise;
    alert(result);
}

//Task5
function searchPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}

function func(n) {
    for (var i = n; i > 0; i--) {
        if (searchPrime(i)) console.log(' ' + (i));
    }
}