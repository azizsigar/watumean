const nlp = require('compromise');

const sentence = 'i come home';
const pastTenseSentence = nlp(sentence).sentences().toPastTense().text();
const negativeTenseSentence = nlp(sentence).sentences().toNegative().text();
const futureTenseSentence= nlp(sentence).sentences().toFutureTense().text();
const questionTenseSentence = nlp(sentence).sentences().isQuestion().text();
console.log(futureTenseSentence);
console.log(questionTenseSentence);
console.log(pastTenseSentence);
console.log(negativeTenseSentence);
