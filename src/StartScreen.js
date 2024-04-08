import React from "react";

export default function StartScreen({ numberOfQuestions }) {
    return (
        <div className="start">
            <h2>Welcome to The React Quiz!</h2>
            <h3>{numberOfQuestions} questions to test your React mastery.</h3>
            <button className="btn btn-ui">Start Quiz</button>
        </div>
    );
}