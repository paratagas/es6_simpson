let str = "hello";

for (let c of str) {
    console.log(c);
}

for (let c in str) {
    console.log(c);
    console.log(str[c]); // old for - of
}