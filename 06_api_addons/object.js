let    target = {},
    o1 = { a: 1 }, o2 = { b: 2 },
    o3 = { c: 3 }, o4 = { d: 4 };
// устанавливаем свойство только для чтения
Object.defineProperty( o3, "e", {
    value: 5,
    enumerable: true,
    writable: false,
    configurable: false
} );
// устанавливаем неперечисляемое свойство
Object.defineProperty( o3, "f", {
    value: 6,
    enumerable: false
} );
o3[ Symbol( "g" ) ] = 7;
// устанавливаем неперечисляемый символ
Object.defineProperty( o3, Symbol( "h" ), {
    value: 8,
    enumerable: false
} );
Object.setPrototypeOf( o3, o4 );

Object.assign( target, o1, o2, o3 );
console.log(target.a);                // 1
console.log(target.b);                // 2
console.log(target.c);                // 3

Object.getOwnPropertyDescriptor( target, "e" );
// { value: 5, writable: true, enumerable: true,
// configurable: true }
Object.getOwnPropertySymbols( target );
// [Symbol("g")]
