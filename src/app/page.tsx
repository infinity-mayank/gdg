'use client'
import {useState} from "react";
import data from '../../assets/questions.json';
import Quiz from './quiz';

export interface Question {
  question: string;
  A: string;
  B: string;
  C: string;
  D: string;
  Answer: string;
  Language: string;
  Level: string;
  Code: string;
}
export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const LANGUAGE = {
    JavaScript : 'Javascript',
    Kotlin: 'Kotlin',
    Java: 'Java',
    General: 'General'
  };

  const onSelectLanguage = (language) => setSelectedLanguage(language);

  const getQuestionByLanguage = () : Question => {
    const filteredQuestions = data.filter(ques => ques['Language'] === selectedLanguage);
    return filteredQuestions[Math.floor(Math.random()*filteredQuestions.length)]
  }

  return (
    <div className="h-screen">
      {
        !selectedLanguage &&
        <div className="h-full flex flex-row items-center justify-around p-4">
          {
            Object.keys(LANGUAGE).map(language =>
              <button key={LANGUAGE[language]} className="btn-primary btn border-2 text-3xl font-bold p-6" onClick={() => onSelectLanguage(LANGUAGE[language])}>{language}</button>
            )
          }
        </div>
      }
      {
        selectedLanguage &&
        <div className="h-full p-4">
          <Quiz question={getQuestionByLanguage()} />
        </div>
      }
    </div>
  )
}
