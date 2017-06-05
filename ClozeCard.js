var clozeCard = function (fullText, cloze) {
  if (fullText.search(cloze) !== 1) {
    this.fullText = fullText;
    this.cloze = cloze;
    this.partial = this.fullText.replace(this.cloze,"...");
  } else {
    return("fulltext cannot be found, try again")
  }
};

module.exports = clozeCard;