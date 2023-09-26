import React from "react";
import ReactDOM from "react-dom/client";
import Ap from "./ap";

class App extends React.Component {
    render() {
        return (
            <div>
            <Ap />
            </div>
        )
    }
}


const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);