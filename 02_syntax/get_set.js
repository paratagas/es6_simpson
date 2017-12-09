let obj = {
    __id: 10,
    get id() {
        return this.__id + 230;
    },
    set id(value) {
        this.__id = value;
    }
};

console.log(obj.__id); // direct call - 10
console.log(obj.id); // call by getter - 240
obj.id = 20; // setter invoked
console.log(obj.id); // call by getter - 250

/*let user = {
    firstName: "Вася",
    surname: "Петров",

    get fullName() {
        return this.firstName + ' ' + this.surname;
    },

    set fullName(value) {
        let split = value.split(' ');
        this.firstName = split[0];
        this.surname = split[1];
    }
};

console.log( user.fullName ); // Вася Петров (из геттера)

user.fullName = "Петя Иванов";
console.log( user.firstName ); // Петя  (поставил сеттер)
console.log( user.surname ); // Иванов (поставил сеттер)*/
