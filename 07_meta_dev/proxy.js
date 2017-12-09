/*const target = {};
const callTracer = new Proxy(target, {
    get: (target, name, receiver) => {
        console.log(`get was called for: ${name}`);
        return target[name];
    }
});

callTracer.property = 'value';
console.log(callTracer.property);
// get was called for: property
// value*/

// -----
/*let user = {};

let proxy = new Proxy(user, {
    get(target, prop) {
        console.log(`Чтение ${prop}`);
        return target[prop];
    },
    set(target, prop, value) {
        console.log(`Запись ${prop} ${value}`);
        target[prop] = value;
        return true;
    }
});

console.log(proxy.firstName = "Ilya"); // запись

console.log(proxy.firstName); // чтение

console.log(user.firstName); // Ilya*/

let dictionary = {
    'Hello': 'Привет',
    'Bye': 'Пока'
};

//dictionary = new Proxy(dictionary, {
let proxyDictionary = new Proxy(dictionary, {
    get(target, phrase) {
        if (phrase in target) {
            return target[phrase];
        } else {
            console.log(`No phrase: ${phrase}`);
            return phrase;
        }
    }
});

// Обращаемся к произвольным свойствам словаря!
console.log( dictionary['Hello'] ); // Привет
console.log( proxyDictionary['Hello'] ); // Привет
console.log( dictionary['Welcome']); // undefined
console.log( proxyDictionary['Welcome']); // Welcome (без перевода)
