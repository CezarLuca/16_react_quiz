import React from "react";

export default function Options({ question, dispatch, answer }) {
    const hasAnswered = answer !== null;

    const getButtonClass = (index) => {
        let className = "btn btn-option";

        if (answer === index) {
            className += " answer";
        }

        if (hasAnswered) {
            if (index === question.correctOption) {
                className += " correct";
            } else {
                className += " wrong";
            }
        }

        return className;
    };

    return (
        <div>
            <div className="options">
                {question.options.map((option, index) => (
                    <button
                        key={option}
                        // className={`btn btn-option ${
                        //     answer === index ? "answer" : ""
                        // } ${
                        //     hasAnswered
                        //         ? index === question.correctOption
                        //             ? "correct"
                        //             : "wrong"
                        //         : ""
                        // }`}
                        className={getButtonClass(index)}
                        onClick={() =>
                            dispatch({ type: "newAnswer", payload: index })
                        }
                        disabled={hasAnswered}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}
