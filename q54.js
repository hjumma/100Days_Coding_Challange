//Making Flexible object keys: learn how to set up list where you can change names of each section based on what you need at the moment , like adjusting labels based on user choices. 
// A way to make a flexible list:
function createobjectwithDynamicKey(key, value) {
    var dynamicobject = {};
    dynamicobject[key] = value;
    return dynamicobject;
}
var userPreference = createobjectwithDynamicKey("theme", "Dark");
console.log(userPreference);
//Example 2:
var userProfile = createobjectwithDynamicKey("username", "rx_09");
console.log(userProfile);
//Example 3:
var userPreferences = createobjectwithDynamicKey("language", "English");
console.log(userPreferences);
//Example 4: 
var bookAuthorname = createobjectwithDynamicKey("Author", "Stephen Hawking");
console.log(bookAuthorname);
