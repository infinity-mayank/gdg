'use client'

import {Question} from "@/app/page";
import {useState} from "react";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { CodeBlock, dracula } from 'react-code-blocks';

const BackIcon = () => 
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7076 25.2924C20.8005 25.3854 20.8742 25.4957 20.9244 25.6171C20.9747 25.7384 21.0006 25.8686 21.0006 25.9999C21.0006 26.1313 20.9747 26.2614 20.9244 26.3828C20.8742 26.5042 20.8005 26.6145 20.7076 26.7074C20.6146 26.8004 20.5043 26.8741 20.383 26.9243C20.2616 26.9746 20.1314 27.0005 20.0001 27.0005C19.8687 27.0005 19.7386 26.9746 19.6172 26.9243C19.4958 26.8741 19.3855 26.8004 19.2926 26.7074L9.29255 16.7074C9.19958 16.6146 9.12582 16.5043 9.07549 16.3829C9.02517 16.2615 8.99927 16.1314 8.99927 15.9999C8.99927 15.8685 9.02517 15.7384 9.07549 15.617C9.12582 15.4956 9.19958 15.3853 9.29255 15.2924L19.2926 5.29245C19.4802 5.10481 19.7347 4.99939 20.0001 4.99939C20.2654 4.99939 20.5199 5.1048 20.7076 5.29245C20.8952 5.48009 21.0006 5.73458 21.0006 5.99995C21.0006 6.26531 20.8952 6.5198 20.7076 6.70745L11.4138 15.9999L20.7076 25.2924Z" fill="white"/>
</svg>


const Congratulation = () => {
  const { width, height } = useWindowSize()
  return (
    <Confetti
      width={width}
      height={height}
    />
  )
}

const Question = ({isSelected, text}: {isSelected: boolean, text: string}) => <span className={`${isSelected ? 'text-[#FFE500]' : ''}`}>{text}</span>


export default function Quiz(question: { question: Question }) {
  const [selectedOption, setSelectedOption] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(false)
  const [wrongAnswer, setWrongAnswer] = useState(false)
  
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
      setWrongAnswer(true)
    }
  }

  return (
    <>
      {
        rightAnswer &&
          <div>
              <div className="h-screen w-screen">
                <div className="flex flex-col justify-center items-center h-full">
                  <div className="title-word title-word-1 text-9xl text-extra-bold uppercase">Congratulation!</div>
                  <div className="text-7xl text-[#FFE500] text-extra-bold uppercase">You have won goodies!</div>
                </div>
              </div>
              <Congratulation />
          </div>
      }
      {
        wrongAnswer &&
        <div className="wrong-answer" id="ui">
          {
            new Array(40).fill('').map((_,i) => <div key={`wrong-answer-${i}`} className="text">Oops Wrong Answer :(</div>)
          }
          
        </div>
      }
      {
        !wrongAnswer && !rightAnswer && <div className="p-12">
          <div className="absolute z-10">
            <button type="button" className="text-xl text-white bg-[#1F2937] text-white rounded-2xl pl-2 pr-5 py-2.5" onClick={onBackClick}>
              <span className="flex"><BackIcon/>{" Back"}</span>
            </button>
          </div>
          <div className="flex h-full w-full gap-[4rem] items-center">
            <div className="h-screen overflow-scroll flex flex-col justify-center basis-3/5">
              { randomQuestion.question && <label className="text-[#FFE500] text-4xl text-wrap leading-[3rem]">{randomQuestion.question}</label> }
              {
                randomQuestion.Code &&
                <div className="text-4xl">
                  <CodeBlock
                    text={randomQuestion.Code}
                    showLineNumbers={true}
                    wrapLines
                    theme={dracula}
                  />
                </div>
              }
            </div>
            <div className="flex flex-col gap-[44px] basis-2/5">
              <div>
                <label className="text-2xl cursor-pointer" key={randomQuestion.A}>
                  <input
                    className="mr-4 h-6 w-6 accent-[#FFE500]"
                    type="radio"
                    value="A"
                    checked={selectedOption == randomQuestion.A}
                    onChange={() => handleOptionChange(randomQuestion.A)}
                  />
                  <Question text={randomQuestion.A} isSelected={selectedOption == randomQuestion.A}/>
                </label>
              </div>
              <div>
                <label className="text-2xl cursor-pointer" key={randomQuestion.B}>
                  <input
                    className="mr-4 h-6 w-6 accent-[#FFE500]"
                    type="radio"
                    value="B"
                    checked={selectedOption == randomQuestion.B}
                    onChange={() => handleOptionChange(randomQuestion.B)}
                  />
                  <Question text={randomQuestion.B} isSelected={selectedOption == randomQuestion.B}/>
                </label>
              </div>
              <div>
                <label className="text-2xl cursor-pointer" key={randomQuestion.C}>
                  <input
                    className="mr-4 h-6 w-6 accent-[#FFE500]"
                    type="radio"
                    value="C"
                    checked={selectedOption == randomQuestion.C}
                    onChange={() => handleOptionChange(randomQuestion.C)}
                  />
                  <Question text={randomQuestion.C} isSelected={selectedOption == randomQuestion.C}/>
                </label>
              </div>
              <div>
                <label className="text-2xl cursor-pointer" key={randomQuestion.D}>
                  <input
                    className="mr-4 h-6 w-6 accent-[#FFE500]"
                    type="radio"
                    value="D"
                    checked={selectedOption == randomQuestion.D}
                    onChange={() => handleOptionChange(randomQuestion.D)}
                  />
                  <Question text={randomQuestion.D} isSelected={selectedOption == randomQuestion.D}/>
                </label>
              </div>

              <div className="flex justify-end">
                <div className="mr-6">
                  <button  type="button" disabled={!selectedOption} className="text-xl bg-[#FFE500] text-[#0f0f23] disabled:brightness-50	rounded-2xl px-5 py-2.5" onClick={onSubmit}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
