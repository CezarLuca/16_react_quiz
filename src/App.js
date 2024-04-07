// import DateCounter from "./DateCounter";
import { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";

export default function App() {
    useEffect(() => {
        fetch("http://localhost:9000/questions")
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
    }, []);
    return (
        <div className="app">
            {/* <DateCounter /> */}
            <Header />
            <Main>
                <p>1/15</p>
                <p>Question?</p>
            </Main>
        </div>
    );
}
