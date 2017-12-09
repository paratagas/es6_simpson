{
    // `a` is not declared
    if (typeof a === "undefined") {
        console.log( "cool" );
    }

    // `b` is declared, but in its TDZ
    if (typeof b === "undefined") {		// ReferenceError!
    //if (!b) {		// ReferenceError!
        console.log( "!b" );
    }

    // ..

    let b;
}
