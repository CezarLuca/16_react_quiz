// import React from "react";

// export default function NextButton({
//     dispatch,
//     answer,
//     index,
//     numberOfQuestions,
// }) {
//     if (answer === null) {
//         return (
//             <button disabled className="btn btn-ui">
//                 Next
//             </button>
//         );
//     } else if (index < numberOfQuestions - 1) {
//         return (
//             <button
//                 className="btn btn-ui"
//                 onClick={() => dispatch({ type: "nextQuestion" })}
//             >
//                 Next
//             </button>
//         );
//     } else {
//         return (
//             <button
//                 className="btn btn-ui"
//                 onClick={() => dispatch({ type: "finish" })}
//             >
//                 Finish
//             </button>
//         );
//     }
// }

import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
    const { dispatch, answer, index, questions } = useQuiz();

    if (answer === null) {
        return (
            <button disabled className="btn btn-ui">
                Next
            </button>
        );
    } else if (index < questions.length - 1) {
        return (
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: "nextQuestion" })}
            >
                Next
            </button>
        );
    } else {
        return (
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: "finish" })}
            >
                Finish
            </button>
        );
    }
}

export default NextButton;
