//Making Flexible object keys: learn how to set up list where you can change names of each section based on what you need at the moment , like adjusting labels based on user choices. 

// A way to make a flexible list:

function createobjectwithDynamicKey(key: string, value: string){
    let dynamicobject = {};
dynamicobject[key] = value;
return dynamicobject; }

let userPreference = createobjectwithDynamicKey ("theme", "Dark");
console.log(userPreference);

//Example 2:
let userProfile = createobjectwithDynamicKey("username", "rx_09");
console.log(userProfile); 

//Example 3:
let userPreferences = createobjectwithDynamicKey("language", "English");
console.log(userPreferences); 


//Example 4: 
let bookAuthorname = createobjectwithDynamicKey ("Author", "Stephen Hawking");
console.log(bookAuthorname);