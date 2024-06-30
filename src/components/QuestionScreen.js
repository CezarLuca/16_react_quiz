// import React from "react";
// import Options from "./Options";

// export default function QuestionScreen({ question, dispatch, answer }) {
//     // console.log(question);
//     return (
//         <div>
//             <h4>{question.question}</h4>
//             <Options question={question} dispatch={dispatch} answer={answer} />
//         </div>
//     );
// }

import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function QuestionScreen() {
    const { questions, index } = useQuiz();
    const question = questions.at(index);

    console.log(question);

    return (
        <div>
            <h4>{question.question}</h4>
            <Options question={question} />
        </div>
    );
}

export default QuestionScreen;
