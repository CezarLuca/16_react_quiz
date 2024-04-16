import React, { useEffect } from "react";

export default function Timer({ dispatch, secondsRemaining }) {
    let minutesRemaining = Math.floor(secondsRemaining / 60);
    let seconds = secondsRemaining % 60;

    useEffect(() => {
        const id = setInterval(() => {
            // console.log("tick");
            dispatch({ type: "tick" });
        }, 1000);
        return () => clearInterval(id);
    }, [dispatch]);

    return (
        <div className="timer">
            Time Left:{" "}
            {minutesRemaining < 10 ? `0${minutesRemaining}` : minutesRemaining}:
            {seconds < 10 ? `0${seconds}` : seconds}
        </div>
    );
}
