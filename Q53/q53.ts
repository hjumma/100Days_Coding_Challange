//Pulling a part nested object: imagine you have list inside another list that shows what a computure programmer knows, like coding language, tool and software framwork. Find a way to get three specific skills from list and show them. 


let programmerSkills = {
    languages: ["JavaScript", "Python", "Java", "C++"],
    tools: ["VS Code", "Git", "Docker", "Jupyter Notebook"],
    frameworks: ["React", "Node.js", "Django", "Spring Boot"]
};

//Puling out specific skills 
let {languages, tools, frameworks} = programmerSkills;


//showing skills form each list. 
console.log(`Language: ${languages[0]}, Tools: ${tools[1]}, Framework: ${frameworks[1]}`);
