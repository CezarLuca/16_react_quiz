import React from "react";

export default function NextButton({ dispatch, answer }) {
    if (answer === null) {
        return (
            <button disabled className="btn btn-ui">
                Next
            </button>
        );
    } else {
        return (
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: "nextQuestion" })}
            >
                Next
            </button>
        );
    }
}
