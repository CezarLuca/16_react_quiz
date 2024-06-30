// import React from "react";

// export default function StartScreen({ numberOfQuestions, dispatch }) {
//     return (
//         <div className="start">
//             <h2>Welcome to The React Quiz!</h2>
//             <h3>{numberOfQuestions} questions to test your React mastery.</h3>
//             <button
//                 className="btn btn-ui"
//                 onClick={() => dispatch({ type: "start" })}
//             >
//                 Start Quiz
//             </button>
//         </div>
//     );
// }

import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
    const { numQuestions, dispatch } = useQuiz();

    return (
        <div className="start">
            <h2>Welcome to The React Quiz!</h2>
            <h3>{numQuestions} questions to test your React mastery.</h3>
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: "start" })}
            >
                Start Quiz
            </button>
        </div>
    );
}

export default StartScreen;
