const fs = require('fs');

const sentence = fs.readFileSync(0, 'utf8').trim();
const words = sentence.split(/\s+/);

let longest = words[0];

for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
        longest = words[i];
    }
}

console.log(longest);