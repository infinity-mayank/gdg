'use client'

import {Question} from "@/app/page";
import {useState} from "react";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const Congratulation = () => {
  const { width, height } = useWindowSize()
  return (
    <Confetti
      width={width}
      height={height}
    />
  )
}


export default function Quiz(question: { question: Question }) {
  const [selectedOption, setSelectedOption] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(false)
  const randomQuestion = question.question;

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const onBackClick = () => window.location.reload();
  const onSubmit = () => {
    const isWinner = selectedOption == randomQuestion[randomQuestion.Answer];
    if(isWinner) {
      setRightAnswer(true)
    } else {
      setRightAnswer(false)
      alert('Sorry! your answer is incorrect.');
    }
  }

  return (
    <>
      {rightAnswer && <Congratulation />}
      <div className="flex h-full w-full gap-[52px] items-center">
        <div className="h-screen overflow-scroll flex items-center basis-3/5">
          <pre className="font-mono font-thin text-4xl text-wrap leading-[3rem]">{randomQuestion.question}</pre>
        </div>
        <div className="flex flex-col gap-[44px] basis-2/5">
          <div>
            <label className="flex items-center text-4xl" key={randomQuestion.A}>
              <input
                className="mr-4 h-8 w-8"
                type="radio"
                value="A"
                checked={selectedOption == randomQuestion.A}
                onChange={() => handleOptionChange(randomQuestion.A)}
              />
              {randomQuestion.A}
            </label>
          </div>
          <div>
            <label className="flex items-center text-4xl" key={randomQuestion.B}>
              <input
                className="mr-4 h-8 w-8"
                type="radio"
                value="B"
                checked={selectedOption == randomQuestion.B}
                onChange={() => handleOptionChange(randomQuestion.B)}
              />
              {randomQuestion.B}
            </label>
          </div>
          <div>
            <label className="flex items-center text-4xl" key={randomQuestion.C}>
              <input
                className="mr-4 h-8 w-8"
                type="radio"
                value="C"
                checked={selectedOption == randomQuestion.C}
                onChange={() => handleOptionChange(randomQuestion.C)}
              />
              {randomQuestion.C}
            </label>
          </div>
          <div>
            <label className="flex items-center text-4xl" key={randomQuestion.D}>
              <input
                className="mr-4 h-8 w-8"
                type="radio"
                value="D"
                checked={selectedOption == randomQuestion.D}
                onChange={() => handleOptionChange(randomQuestion.D)}
              />
              {randomQuestion.D}
            </label>
          </div>

          <div className="flex justify-end">
            <div className="mr-6">
              <button  type="button" className="text-4xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={onSubmit}>Submit</button>
            </div>
            <button type="button" className="text-4xl text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={onBackClick}>Back</button>
          </div>
        </div>
      </div>
    </>
  );
}
