import React, { useEffect } from "react";

export default function Timer({ dispatch, secondsRemaining }) {
    let minutesRemaining = Math.floor(secondsRemaining / 60);
    let seconds = secondsRemaining % 60;

    useEffect(() => {
        setInterval(() => {
            // console.log("tick");
            dispatch({ type: "tick" });
        }, 1000);
    }, [dispatch]);

    return (
        <div className="timer">
            Time Left: {minutesRemaining}:
            {seconds < 10 ? `0${seconds}` : seconds}
        </div>
    );
}
