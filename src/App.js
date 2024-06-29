// import DateCounter from "./DateCounter";
// import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import QuestionScreen from "./components/QuestionScreen";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import { useQuiz } from "./contexts/QuizContext";
// import { ProgressProvider } from "./contexts/ProgressContext";

// const SECONDS_PER_QUESTION = 40;

// const initialState = {
//     questions: [],
//     status: "loading", // "loading", "ready", "active", "finished", "error"
//     index: 0,
//     answer: null,
//     points: 0,
//     highscore: 0,
//     secondsRemaining: null,
// };

// function reducer(state, action) {
//     switch (action.type) {
//         case "dataRecieved":
//             return { ...state, questions: action.payload, status: "ready" };
//         case "dataError":
//             return { ...state, status: "error" };
//         case "start":
//             return {
//                 ...state,
//                 status: "active",
//                 secondsRemaining: state.questions.length * SECONDS_PER_QUESTION,
//             };
//         case "newAnswer":
//             // const question = state.questions[state.index];
//             const question = state.questions.at(state.index);
//             return {
//                 ...state,
//                 answer: action.payload,
//                 points:
//                     action.payload === question.correctOption
//                         ? state.points + question.points
//                         : state.points,
//             };
//         case "nextQuestion":
//             return {
//                 ...state,
//                 index: state.index + 1,
//                 answer: null,
//             };
//         case "finish":
//             return {
//                 ...state,
//                 status: "finished",
//                 highscore:
//                     state.points > state.highscore
//                         ? state.points
//                         : state.highscore,
//             };
//         case "restart":
//             return {
//                 ...initialState,
//                 questions: state.questions,
//                 status: "ready",
//                 highscore: state.highscore,
//             };
//         // return {
//         //     ...state,
//         //     status: "ready",
//         //     index: 0,
//         //     answer: null,
//         //     points: 0,
//         // };
//         case "tick":
//             return {
//                 ...state,
//                 secondsRemaining: state.secondsRemaining - 1,
//                 status:
//                     state.secondsRemaining === 0 ? "finished" : state.status,
//             };

//         default:
//             throw new Error(`Unknown action type: ${action.type}`);
//     }
// }

// export default function App() {
//     const [
//         {
//             questions,
//             status,
//             index,
//             answer,
//             points,
//             highscore,
//             secondsRemaining,
//         },
//         dispatch,
//     ] = useReducer(reducer, initialState);
//     useEffect(() => {
//         fetch("http://localhost:9000/questions")
//             .then((response) => response.json())
//             // .then((data) => console.log(data))
//             .then((data) => dispatch({ type: "dataRecieved", payload: data }))
//             // .catch((error) => console.error(error));
//             .catch(() => dispatch({ type: "dataError" }));
//     }, []);

//     const numberOfQuestions = questions.length;
//     const maxPossiblePoints = questions.reduce(
//         (previousPoints, question) => previousPoints + question.points,
//         0
//     );

//     return (
//         <div className="app">
//             {/* <DateCounter /> */}
//             <Header />
//             <Main>
//                 {status === "loading" && <Loader />}
//                 {status === "error" && <Error />}
//                 {status === "ready" && (
//                     <StartScreen
//                         numberOfQuestions={numberOfQuestions}
//                         dispatch={dispatch}
//                     />
//                 )}
//                 {status === "active" && (
//                     <>
//                         <Progress
//                             index={index}
//                             numberOfQuestions={numberOfQuestions}
//                             points={points}
//                             maxPossiblePoints={maxPossiblePoints}
//                             answer={answer}
//                         />
//                         <QuestionScreen
//                             question={questions[index]}
//                             dispatch={dispatch}
//                             answer={answer}
//                         />
//                         <Footer>
//                             <Timer
//                                 dispatch={dispatch}
//                                 secondsRemaining={secondsRemaining}
//                             />
//                             <NextButton
//                                 dispatch={dispatch}
//                                 answer={answer}
//                                 index={index}
//                                 numberOfQuestions={numberOfQuestions}
//                             />
//                         </Footer>
//                     </>
//                 )}
//                 {status === "finished" && (
//                     <FinishScreen
//                         points={points}
//                         maxPossiblePoints={maxPossiblePoints}
//                         highscore={highscore}
//                         dispatch={dispatch}
//                     />
//                 )}
//             </Main>
//         </div>
//     );
// }

export default function App() {
    const { status } = useQuiz();

    return (
        <div className="app">
            <Header />
            <Main>
                {status === "loading" && <Loader />}
                {status === "error" && <Error />}
                {status === "ready" && <StartScreen />}
                {status === "active" && (
                    <>
                        <Progress />
                        <QuestionScreen />
                        <Footer>
                            <Timer />
                            <NextButton />
                        </Footer>
                    </>
                )}
                {status === "finished" && <FinishScreen />}
            </Main>
        </div>
    );
}
