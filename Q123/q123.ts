//Create a loop that iterates through a string and stops when it finds the first vowel

function logUntilVowel(str: string): void {
    const vowels = "aeiou";
    for (const char of str) {
      if (vowels.includes(char)) {
        console.log(`First vowel found: ${char}`);
        break; 
      }
      console.log(char); 
    }
  }
  
  logUntilVowel("bhnghasdwpiuou"); 

  // there is an error with includes method 