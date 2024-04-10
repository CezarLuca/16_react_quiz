import React from "react";

export default function Options({ question, dispatch, answer }) {
    return (
        <div>
            <div className="options">
                {question.options.map((option) => (
                    <button key={option} className="btn btn-option">
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}
