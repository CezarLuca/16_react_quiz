// import React from "react";

// export default function Progress({
//     index,
//     numberOfQuestions,
//     points,
//     maxPossiblePoints,
//     answer,
// }) {
//     return (
//         <header className="progress">
//             <progress
//                 max={numberOfQuestions}
//                 value={index + Number(answer !== null)}
//             ></progress>
//             <p>
//                 Question <strong>{index + 1}</strong> / {numberOfQuestions}
//             </p>
//             <p>
//                 <strong>{points}</strong> / {maxPossiblePoints} points
//             </p>
//         </header>
//     );
// }

import { useQuiz } from "../contexts/QuizContext";

function Progress() {
    const { index, numQuestions, points, maxPossiblePoints, answer } =
        useQuiz();

    return (
        <header className="progress">
            <progress
                max={numQuestions}
                value={index + Number(answer !== null)}
            ></progress>
            <p>
                Question <strong>{index + 1}</strong> / {numQuestions}
            </p>
            <p>
                <strong>{points}</strong> / {maxPossiblePoints} points
            </p>
        </header>
    );
}

export default Progress;
