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
    <div className="flex min-h-screen flex-row items-center justify-between p-24">
      {
        !selectedLanguage &&
        Object.keys(LANGUAGE).map(language =>
          <button key={LANGUAGE[language]} className="btn-primary btn border-2 p-4" onClick={() => onSelectLanguage(LANGUAGE[language])}>{language}</button>
        )
      }
      {
        selectedLanguage &&
        <div>
          <Quiz question={getQuestionByLanguage()} />
        </div>
      }
    </div>
  )
}
