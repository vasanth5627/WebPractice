let sentence = "Hi how are you, I love JavaScript";

console.log(sentence.length);

console.log(sentence.indexOf('e'));

let firstWord = sentence.slice(0,sentence.indexOf(' '));

console.log(firstWord)

let lastWord = sentence.substring(sentence.lastIndexOf(' ')+1);

console.log(lastWord)

let con = sentence.includes('JavaScript');

console.log(con);

let repSentence  = sentence.replace('JavaScript','Python');

console.log(repSentence);

const words = sentence.split(' ');

console.log(words);

let newSentence = words.map((ele)=> {return ele.charAt(0).toUpperCase()+ele.substring(1)}).join(" ");

console.log(newSentence)

let message = `The sentence is : ${sentence} 
and the length of it is: ${sentence.length} and the first occurance of 'e' is ${sentence.indexOf('e')}
and the last word is: ${lastWord}`;

console.log(message)


