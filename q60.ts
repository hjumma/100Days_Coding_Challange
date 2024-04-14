//Self-running user profile create a quick, self setup profile for a user that can tell  you user name & age. 


let userProfile = (function() {
    let name = "Asif";
    let age = 24;

    return {
        displayInfo: function() {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();

userProfile.displayInfo(); 

//Have some query will ask teacher for clarification. 
