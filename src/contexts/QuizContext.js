import { createContext, useContext, useReducer, useEffect } from "react";

const QuizContext = createContext();

const SECONDS_PER_QUESTION = 40;

const initialState = {
    questions: [],
    status: "loading", // "loading", "ready", "active", "finished", "error"
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
    secondsRemaining: null,
};

function reducer(state, action) {
    switch (action.type) {
        case "dataRecieved":
            return { ...state, questions: action.payload, status: "ready" };
        case "dataFailed":
            return { ...state, status: "error" };
        case "start":
            return {
                ...state,
                status: "active",
                secondsRemaining: state.questions.length * SECONDS_PER_QUESTION,
            };
        case "newAnswer":
            const question = state.questions.at(state.index);
            return {
                ...state,
                answer: action.payload,
                points:
                    action.payload === question.correctOption
                        ? state.points + question.points
                        : state.points,
            };
        case "nextQuestion":
            return {
                ...state,
                index: state.index + 1,
                answer: null,
            };
        case "finish":
            return {
                ...state,
                status: "finished",
                highscore:
                    state.points > state.highscore
                        ? state.points
                        : state.highscore,
            };
        case "restart":
            return {
                ...initialState,
                questions: state.questions,
                status: "ready",
                highscore: state.highscore,
            };
        case "tick":
            return {
                ...state,
                secondsRemaining: state.secondsRemaining - 1,
                status:
                    state.secondsRemaining === 0 ? "finished" : state.status,
            };
        default:
            throw new Error("Invalid action type");
    }
}

function QuizProvider({ children }) {
    const [
        {
            question,
            status,
            index,
            answer,
            points,
            highscore,
            secondsRemaining,
        },
        dispatch,
    ] = useReducer(reducer, initialState);

    const numQuestions = question.length;
    const maxPossiblePoints = question.reduce((acc, q) => acc + q.points, 0);

    useEffect(() => {
        fetch("http://localhost:9000/questions")
            .then((res) => res.json())
            .then((data) => dispatch({ type: "dataRecieved", payload: data }))
            .catch(() => dispatch({ type: "dataFailed" }));
    }, []);

    return (
        <QuizContext.Provider
            value={{
                question,
                status,
                index,
                answer,
                points,
                highscore,
                secondsRemaining,
                numQuestions,
                maxPossiblePoints,
                dispatch,
            }}
        >
            {children}
        </QuizContext.Provider>
    );
}

function useQuiz() {
    const context = useContext(QuizContext);
    if (!context) {
        throw new Error("useQuiz must be used within a QuizProvider");
    }
    return context;
}

export { QuizProvider, useQuiz };
