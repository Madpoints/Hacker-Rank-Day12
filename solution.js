"use strict";

var _input = "";
var _index = 0;
process.stdin.on("data", data => {
  _input += data;
});
process.stdin.on("end", () => {
  _input = _input.split(new RegExp("[ \n]+"));
  main();
});
function read() {
  return _input[_index++];
}

/**** Ignore above this line. ****/

class Person {
  constructor(firstName, lastName, identification) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = identification;
  }

  printPerson() {
    console.log(
      "Name: " +
        this.lastName +
        ", " +
        this.firstName +
        "\nID: " +
        this.idNumber
    );
  }
}

class Student extends Person {
  constructor(firstName, lastName, id, scores) {
    super(firstName, lastName, id);

    this.scores = scores;
  }

  calculate() {
    let sum = 0;

    for (var i = 0; i < this.scores.length; i++) {
      sum += this.scores[i];
    }

    let avg = sum / this.scores.length;

    let score = "";

    switch (true) {
      case 90 <= avg <= 100:
        score = "O";
        break;
      case 80 <= avg < 90:
        score = "E";
        break;
      case 70 <= avg < 80:
        score = "A";
        break;
      case 55 <= avg < 70:
        score = "P";
        break;
      case 40 <= avg < 55:
        score = "D";
        break;
      default:
        score = "T";
        break;
    }

    return score;
  }
}

function main() {
  let firstName = read();
  let lastName = read();
  let id = +read();
  let numScores = +read();
  let testScores = new Array(numScores);

  for (var i = 0; i < numScores; i++) {
    testScores[i] = +read();
  }

  let s = new Student(firstName, lastName, id, testScores);
  s.printPerson();
  s.calculate();
  console.log("Grade: " + s.calculate());
}
