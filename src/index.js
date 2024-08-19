const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let array = [];
  let decode = "";
  for (let i = 0; i < expr.length; i += 10) {
    array.push(expr.slice(i, i + 10));
  }
  for (let arr of array) {
    if (arr === "**********") {
      decode += " ";
    } else {
      let morseToLetter = "";
      for (let j = 0; j < 10; j += 2) {
        if (arr.slice(j, j + 2) === "10") {
          morseToLetter += ".";
        } else if (arr.slice(j, j + 2) === "11") {
          morseToLetter += "-";
        } else if (arr.slice(j, j + 2) === "00") {
          morseToLetter += "";
        }
      }
      decode += MORSE_TABLE[morseToLetter];
    }
  }
  return decode;
}

module.exports = {
  decode,
};
