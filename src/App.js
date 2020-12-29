import React, { useState } from "react";
import "./styles.css";

var date,
  add = 0,
  birthdaySum = 0,
  numberGet;

export default function App() {
  const [finalAnswer, setFinalAnswer] = useState("");

  //GETTING DATE
  function getDate(event) {
    date = event.target.value.split("-");
    if (checkDate()) {
      birthdaySum = sum();
      // console.log(birthdaySum);
      setFinalAnswer("");
    } else {
      setFinalAnswer("Enter Valid Date");
    }
  }

  //CHECKING IF DATE IS NOT MORE THAN CURRENT DATE
  function checkDate() {
    const givenDate = Number(date[2]);
    const givenMonth = Number(date[1]);
    const givenYear = Number(date[0]);
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    const currentYear = currentDate.getFullYear();
    if (givenYear > currentYear) {
      return false;
    } else if (givenYear <= currentYear && givenMonth > currentMonth) {
      return false;
    } else if (
      givenYear <= currentYear &&
      givenMonth <= currentMonth &&
      givenDate > currentDay
    ) {
      return false;
    } else return true;
  }

  //GETTING SUM OF DIGITS OF DATE
  function sum() {
    add = 0;
    for (var i = 0; i < 3; i++) {
      var n = date[i];
      while (n !== 0) {
        add += n % 10;
        n = Math.floor(n / 10);
      }
    }
    return add;
  }

  //GETTING LUCKY NUMBER
  function getNumber(event) {
    numberGet = event.target.value;
  }

  //MAIN FUNCTION
  function getLuckyNumber() {
    var finalNumber = Number(numberGet);
    var answer;

    if (Number.isNaN(birthdaySum) || birthdaySum === 0) {
      answer = "Enter Date First";
    } else if (Number.isNaN(finalNumber)) {
      answer = "Enter Valid Number";
    } else if (birthdaySum % finalNumber === 0) {
      answer = "Yyay! Your birthday is a Lucky Number";
    } else {
      answer = "Ughug! Your birthday is not a Lucky Number";
    }

    setFinalAnswer(answer);
  }

  return (
    <div className="App">
      <h3 style={{ backgroundColor: "grey", margin: "1rem", padding: "1rem" }}>
        IS YOUR BIRTHDAY LUCKY?
      </h3>{" "}
      <h6>Please enter your BIRTHDAY</h6>
      <input className="dateInput" type="Date" onChange={getDate}></input>
      <h6>Please enter your lucky number</h6>
      <input className="numberInput" type="number" onChange={getNumber}></input>
      <h6>👇</h6>
      <button onClick={getLuckyNumber}>Click to CHECK</button>
      <h5>{finalAnswer}</h5>
      <div>
        <small>
          If the sum of your birthday is divisible by your lucky number, your
          birthday is considered LUCKY!
        </small>
      </div>
    </div>
  );
}
