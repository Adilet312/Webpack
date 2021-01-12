const quizData = [
  {
    question: 'What is capital of Kyrgyz Republic ?',
    a: 'Almaty',
    b: 'Moscow',
    c: 'Bishkek',
    correct: 'c'
  },
  {
    question: 'The most popular programming language in 2020 ?',
    a: 'Java',
    b: 'JavaScript',
    c: 'Pyhton',
    correct: 'b'
  },
  {
    question: 'When was ES6 relesed ?',
    a: '2016',
    b: '2006',
    c: '1996',
    correct: 'a'
  },
  {
    question: 'Who is the founder of Tesla ?',
    a: 'Adilet',
    b: 'Ellon',
    c: 'Sasha',
    correct: 'b'
  }
]
/*Target elements*/
  const submit = document.querySelector('.btn') //button
  const choices = document.querySelectorAll('.choice')//choices
  let currentQuestion = 0;                           //acumulator for questions
  const question =  document.querySelector('#question');//target and show question from object
  const a_question = document.querySelector('.a_question');//target and show question from object
  const b_question = document.querySelector('.b_question');//target and show question from object
  const c_question = document.querySelector('.c_question');//target and show question from object
// let total = 0;
// window.addEventListener('DOMContentLoaded',loadQuestion)
submit.addEventListener('click', loadQuestion)


function loadQuestion(){
   let questionText = quizData[currentQuestion].question;
   let text_a = quizData[currentQuestion].a;
   let text_b = quizData[currentQuestion].b;
   let text_c = quizData[currentQuestion].c;

   question.innerText = questionText;
   b_question.innerText = text_a
   a_question.innerText = text_b
   c_question.innerText = text_c
   for(let idx = 0; idx < choices.length; idx++){
     if(choices[idx].checked){
       selectAnswer(choices[idx].id)
       break;
     }
   }
  if(currentQuestion < quizData.length){
    currentQuestion++;
  }


 }

 function selectAnswer(element){
   console.log(element);
 }
//
// function selectAnswer(){
//   let answer;
//   choices.forEach( element => {
//     if(element.checked){
//       answer = element.id
//     }
//     return element;
//   })
//   return answer;
// }
//
// submit.addEventListener('click', ()=>{
//   if(currentQuestion < quizData.length){
//     let answer = selectAnswer();
//     console.log(answer);
//     if(answer===quizData[currentQuestion].correct){
//       total = total + 10;
//     }
//     currentQuestion++;
//     loadQuestion();
//   }else{
//     console.log("Over all total: ",total);
//   }
// })
<section class = 'quiz-container'>
  <h2 id = 'question'></h2>
  <ul>
    <li>
      <input type = 'radio' id = 'a' name = 'answer' class = 'choice' />
      <label class = 'a_question'></label>
    </li>
    <li>
      <input type = 'radio' id = 'b' name = 'answer' class = 'choice' />
      <label class = 'b_question'></label>
    </li>
    <li>
      <input type = 'radio' id = 'c' name = 'answer' class = 'choice' />
      <label class = 'c_question'></label>
    </li>
  </ul>
  <input type = 'submit' value = 'Submit' class='btn'/>
</section>

.quiz-container{
  width:320px;
  height:300px;
  position: relative;
  margin: 0 auto;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  border-radius: 20px;
}
.quiz-container h2{
  text-align: center;
}
.quiz-container ul{
  display: flex;
  position: relative;
  list-style:none;
  flex-direction: column;
  justify-content: space-around;
  height:130px;

}
.quiz-container u li{
  width:100%;
  height: 100%;
  position: absolute;
  padding-left: 20px;

}
 input[type=submit]{
  background: rebeccapurple;
  color:#fff;
  height: 40px;
  font-size: 15px;
  outline: inherit;
  border-radius: 20px;

}
