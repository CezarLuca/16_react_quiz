import React, { useEffect } from "react";

export default function Timer() {
    useEffect(() => {
        setInterval(() => {
            console.log("tick");
        }, 1000);
    }, []);

    return <div className="timer">05:00</div>;
}
