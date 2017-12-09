let url = "http://localhost/js_test/phones.json";
let anotherUrl = "http://localhost/js_test/package.json";
// let url = "http://localhost/wrong_url";

// Define Promise
function get(url) {
    return new Promise(function(resolve, reject) {
        let req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function() {
            if (req.status === 200) {
                resolve(req.response); // promise resolver
            } else {
                reject(Error(req.statusText)); // promise rejected
            }
        };

        req.onerror = function() { reject(Error("Network Error")); }; // promise rejected
        req.send();
    });
}

function anotherGet(url) {
    return new Promise(function(resolve, reject) {
        let req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function() {
            if (req.status === 200) {
                resolve(req.response); // promise resolver
            } else {
                reject(Error(req.statusText)); // promise rejected
            }
        };

        req.onerror = function() { reject(Error("Network Error")); }; // promise rejected
        req.send();
    });
}

// Regular CALL:

// with 2 params
/*get(url)
    .then(function(response) {
        console.log("In get call resolve result:");
        console.log(response);
    }, function(err) {
        console.log("In get call reject result:");
        console.log(err);
    });*/

// OR:

// with 2 then methods instead of 2 params
// first then - with 1st param for resolve (function) and 2nd (undefined) - for error.
// We can skip 2nd param at all. In two these cases it will be undefined
// second then - with 1st param for resolve (undefined) and 2nd - for error (function)
/*get(url)
    .then(function(response) {
        console.log("In get call resolve result:");
        console.log(response);
    }, undefined)
    .then(undefined, function(err) {
        console.log("In get call reject result:");
        console.log(err);
    });*/

// OR:

// with then-catch combination instead of 2 params or 2 then methods
/*get(url)
    .then(function(response) {
        console.log("In get call resolve result:");
        console.log(response);
    })
    .catch(function(err) {
        console.log("In get call reject result:");
        console.log(err);
    });*/

// Chain CALL:

/*
get(url)
    .then(function(response) {
        response = JSON.parse(response);
        console.log("response data from first chain then");
        console.log(response);
        //let secondURL = response.data.url;
        let secondURL = anotherUrl;
        return get(secondURL); // return new Promise
    })
    .then(function(response) {
        response = JSON.parse(response);
        console.log("response data from second chain then");
        console.log(response);
        //let thirdURL = response.data.url;
        let thirdURL = url;
        return get(thirdURL); // return new Promise
    })
    .catch(function(err) {
        console.log(err);
    });
*/

// Promise ALL CALL:

let promisesArray = [
    get(url), // promise 1
    anotherGet(anotherUrl) // promise 2
];

Promise.all(promisesArray) // Promise.all should receive iterable object
    .then(function(responsesArray) { // returns array of results in order of list in promisesArray
        let responseOne = JSON.parse(responsesArray[0]);
        let responseTwo = JSON.parse(responsesArray[1]);
        console.log("response data from Promise ALL then");
        console.log(responseOne);
        console.log(responseTwo);
    })
    .catch(function(err) {
        console.log("reject error from Promise ALL then");
        console.log(err);
    });
