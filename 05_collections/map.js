let values = [
    ["key1", "val1"],
    ["key2", "val2"]
];

let map = new Map(values);
console.log(map); // Map(2) {"key1" => "val1", "key2" => "val2"}
console.log(typeof map); // object

map.set("key3", "val3");
console.log(map.get("key1")); // val1
console.log(map.has("key1")); // true
console.log(map.keys()); // MapIterator {"key1", "key2", "key3"}

console.log(map.values()); // MapIterator {"val1", "val2", "val3"}
let iteratedVals = [...map.values()];
console.log(iteratedVals); // Array - ["val1", "val2", "val3"]

console.log(map.entries()); // MapIterator {"key1" => "val1", "key2" => "val2", "key3" => "val3"}
let iteratedKeyVals = [...map.entries()];
console.log(iteratedKeyVals); // // [Array(2), Array(2), Array(2)] - ["key1", "val1"]

console.log(map.size); // 3

console.log(map.delete("key2")); // true
console.log(map.get("key2")); // undefined
console.log(map.has("key2")); // false
console.log(map.size); // 2

console.log(map.clear()); // undefined
console.log(map.size); // 0
