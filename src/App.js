// import DateCounter from "./DateCounter";
import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import QuestionScreen from "./components/QuestionScreen";

const initialState = {
    questions: [],
    status: "loading", // "loading", "ready", "active", "finished", "error"
    index: 0,
};

function reducer(state, action) {
    switch (action.type) {
        case "dataRecieved":
            return { ...state, questions: action.payload, status: "ready" };
        case "dataError":
            return { ...state, status: "error" };
        case "start":
            return { ...state, status: "active" };
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}

export default function App() {
    const [{ questions, status, index }, dispatch] = useReducer(
        reducer,
        initialState
    );
    useEffect(() => {
        fetch("http://localhost:9000/questions")
            .then((response) => response.json())
            // .then((data) => console.log(data))
            .then((data) => dispatch({ type: "dataRecieved", payload: data }))
            // .catch((error) => console.error(error));
            .catch(() => dispatch({ type: "dataError" }));
    }, []);

    const numberOfQuestions = questions.length;

    return (
        <div className="app">
            {/* <DateCounter /> */}
            <Header />
            <Main>
                {status === "loading" && <Loader />}
                {status === "error" && <Error />}
                {status === "ready" && (
                    <StartScreen
                        numberOfQuestions={numberOfQuestions}
                        dispatch={dispatch}
                    />
                )}
                {status === "active" && (
                    <QuestionScreen question={questions[index]} />
                )}
            </Main>
        </div>
    );
}
