//Pulling a part nested object: imagine you have list inside another list that shows what a computure programmer knows, like coding language, tool and software framwork. Find a way to get three specific skills from list and show them. 
var programmerSkills = {
    languages: ["JavaScript", "Python", "Java", "C++"],
    tools: ["VS Code", "Git", "Docker", "Jupyter Notebook"],
    frameworks: ["React", "Node.js", "Django", "Spring Boot"]
};
//Puling out specific skills 
var languages = programmerSkills.languages, tools = programmerSkills.tools, frameworks = programmerSkills.frameworks;
//showing skills form each list. 
console.log("Language: ".concat(languages[0], ", Tools: ").concat(tools[1], ", Framework: ").concat(frameworks[1]));
