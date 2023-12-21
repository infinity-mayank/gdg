'use client'

import {Question} from "@/app/page";
import {useState} from "react";

export default function Quiz(question: { question: Question }) {
  const [selectedOption, setSelectedOption] = useState(0);
  const randomQuestion = question.question;

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const onBackClick = () => window.location.reload();
  const onSubmit = () => {
    const isWinner = selectedOption == randomQuestion[randomQuestion.Answer];
    if(isWinner) {
      alert('Congratulations! You won a goodie.');
      return;
    }
    alert('Sorry! your answer is incorrect.');
  }

  return (
    <div className="flex flex-col">
      <code className="font-mono font-bold">{randomQuestion.question}</code>
      <div>
        <label key={randomQuestion.A}>
          <input
            type="radio"
            value="A"
            checked={selectedOption == randomQuestion.A}
            onChange={() => handleOptionChange(randomQuestion.A)}
          />
          {randomQuestion.A}
        </label>
      </div>
      <div>
        <label key={randomQuestion.B}>
          <input
            type="radio"
            value="B"
            checked={selectedOption == randomQuestion.B}
            onChange={() => handleOptionChange(randomQuestion.B)}
          />
          {randomQuestion.B}
        </label>
      </div>
      <div>
        <label key={randomQuestion.C}>
          <input
            type="radio"
            value="C"
            checked={selectedOption == randomQuestion.C}
            onChange={() => handleOptionChange(randomQuestion.C)}
          />
          {randomQuestion.C}
        </label>
      </div>
      <div>
        <label key={randomQuestion.D}>
          <input
            type="radio"
            value="D"
            checked={selectedOption == randomQuestion.D}
            onChange={() => handleOptionChange(randomQuestion.D)}
          />
          {randomQuestion.D}
        </label>
      </div>

      <div>
        <button className="btn-primary btn border-1 p-2" onClick={onSubmit}>Submit</button>
        <button className="btn-primary btn border-1 p-2" onClick={onBackClick}>Back</button>
      </div>
    </div>
  );
}
