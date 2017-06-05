var basicCard = require("./basicCard.js");
var clozeCard = require("./clozeCard.js");

var president = new basicCard(
  "Who was the first president of the United States?", "George Washington");

  // question
  console.log(president.front);
  // answer
  console.log(president.back);

var presidentCloze = new clozeCard(
  "George Washington was the first president of the United States.", "George Washington");

  // first statement
  console.log(presidentCloze.cloze);
  // completed statement
  console.log(presidentCloze.partial);
  // full statement
  console.log(presidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new clozeCard("This doesn't work", "oops");