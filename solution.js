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
  /*
   *   Class Constructor
   *
   *   @param firstName - A string denoting the Person's first name.
   *   @param lastName - A string denoting the Person's last name.
   *   @param id - An integer denoting the Person's ID number.
   *   @param scores - An array of integers denoting the Person's test scores.
   */
  // Write your constructor here
  constructor(firstName, lastName, id, scores) {
    super(firstName, lastName, id);

    this.scores = scores;
  }
  /*
   *   Method Name: calculate
   *   @return A character denoting the grade.
   */
  // Write your method here
  calculate() {
    let sum = 0;
    let length = this.scores.length;

    for (var i = 0; i < length; i++) {
      sum += this.scores[i];
    }

    let avg = sum / length;

    let score = "";

    if (90 <= avg <= 100) {
      score = "O";
    } else if (80 <= avg < 90) {
      score = "E";
    } else if (70 <= avg < 80) {
      score = "A";
    } else if (55 <= avg < 70) {
      score = "P";
    } else if (40 <= avg < 55) {
      score = "D";
    } else {
      score = "T";
    }

    //     switch (true) {
    //         case (90 <= avg <= 100):
    //             score = "O";
    //             break;
    //         case (80 <= avg < 90):
    //             score = "E";
    //             break;
    //         case (70 <= avg < 80):
    //             score = "A";
    //             break;
    //         case (55 <= avg < 70):
    //             score = "P";
    //             break;
    //         case (40 <= avg < 55):
    //             score = "D";
    //             break;
    //         case (avg < 40):
    //             score = "T";
    //             break;
    //         default:
    //             score = "Unable to calculate";
    //             break;
    //     }

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
