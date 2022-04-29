import React,{useState} from 'react'; 
import data from './data.js';
import SingleQuestion from './Question.js';


function App() {
  const [questions, setQuestions] =  useState(data);

  return (
    <main>
      <div className="header">
        <h1>Questions unanswered?</h1>
        <h2>Let us answer it for you</h2>
      </div>
      <div className="container">
        <h2 className='faq'>FAQ</h2>
        <div className='faqContainer'>
          <h2 className='faq-category'>Product Information</h2>
            <section>
              {
                questions.map ((question) => {
                  return (
                    <SingleQuestion key={question.id} {...question}></SingleQuestion>
                  );
                })
              }
           </section>
        </div>
      </div>
    </main>
  );
}

export default App;
