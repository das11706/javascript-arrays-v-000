var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
var myarray = [1];
mynewarray = ["foo", ...myarray];
return mynewarray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
var myarray = [1];
myarray = ["foo", ...myarray];
return myarray;
}

function addElementToEndOfArray(array, element) {
var anotherarray = [1];
anewarray = [...anotherarray, "foo"];
return anewarray;
}

function destructivelyAddElementToEndOfArray(array, element) {
var anotherarray = [1];
anotherarray = [...anotherarray, "foo"];
return anotherarray;
}
