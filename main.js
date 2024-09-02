"use strict";
// Question 41: Magicians: Display magician names from an array.
// Explain & TIP: Passing arrays to functions allows for the
//  manipulation or display of their contents in a centralized manner. 
// This is useful for handling lists of data.
let magicians = ["leena", "Alice", "devil"];
function show_magician(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
//  show_magician(magicians);
// Question 42:
//  Great Magicians: Add "the Great" to magician names.
// Explain & TIP: Modifying array contents within 
// a function demonstrates how functions can change data. This shows the impact of passing arrays by reference.
function Great_magician(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
;
Great_magician(magicians);
show_magician(magicians);
