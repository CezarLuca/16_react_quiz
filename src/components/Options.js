import React from "react";

export default function Options({ question, dispatch, answer }) {
    return (
        <div>
            <div className="options">
                {question.options.map((option, index) => (
                    <button
                        key={option}
                        className={`btn btn-option ${
                            answer === index ? "answer" : ""
                        } ${
                            index === question.correctOption
                                ? "correct"
                                : "wrong"
                        }`}
                        onClick={() =>
                            dispatch({ type: "newAnswer", payload: index })
                        }
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}
