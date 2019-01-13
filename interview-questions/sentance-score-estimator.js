// Calculate sentance score based on word types:
// - perfect word (more consonats than vowels) = score 5
// - loud word (3 and more vowels) = score 3
// - any other word = score 1

// Example sentance: Sometimes to understand a word's meaning you need more than a definition. At YourDictionary we try to give you // all of the tools you need to really understand what the word means. Seeing the word in a sentence can provide more context and // relevance.


// a e i o u 
// you - 1
// sometimes - 5 consonants and 4 vowels = 5 score
// definition = 3 


// SOMetimes you

// We have an interview today.

// we, have, an, interview, today

// We have an interview today,and its amazing;can't you beleive in that?

// 1 + 1 + 1 + 5 + 5 = 13

const scoreEstimator = (sentance) => {
       let vowelArray = ['a', 'e', 'i', 'o', 'u'];
       let words = sentance.split(" ");
       let score = 0;
       for(let word of words) {
          let vowelCount = 0;
          let consonantCount = 0;
          let chars = word.split("");
          for(let char of chars) {
              if ( false == vowelArray.includes(char.toLowerCase()) ) {
                  consonantCount++;
              }else{
                  vowelCount++;
              }
          }

           if(consonantCount > vowelCount) {
               score+=5;
           }else if (vowelCount >= 3) {
               score+=3;
           }else{
               score+=1;
           }
           // console.log(chars);
           // console.log('score=['+score+'] consonantCount=['+consonantCount+'] vowelCount=['+vowelCount+']');

       }
       return score;
}

console.log(scoreEstimator('you')); // 1
console.log(scoreEstimator('definition')); // 3
console.log(scoreEstimator('sometimes')); // 5
console.log(scoreEstimator('We have an interview today')); // 13
