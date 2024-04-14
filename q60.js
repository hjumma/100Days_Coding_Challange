//Self-running user profile create a quick, self setup profile for a user that can tell  you user name & age. 
var userProfile = (function () {
    var name = "Asif";
    var age = 24;
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
})();
userProfile.displayInfo();
