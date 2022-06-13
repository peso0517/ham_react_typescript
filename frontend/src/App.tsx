import React from "react";
import CounterWithReducer from "./CounterWithReducer";
import logo from "./logo.svg";
import "./App.css";
import { isMemberName } from "typescript";

interface AppProps {
  message?: string;
  isMessage?: boolean;
}

const App: React.FunctionComponent<AppProps> = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{props.message}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          LET's Learn React
        </a>
        <CounterWithReducer />
      </header>
    </div>
  );
};

// messageがない場合、defaultが表示されるようになる
// functionに対して、型制約を実行しないと、デフォルト値がAppPropsと違っても通してしまうので注意!!
App.defaultProps = {
  message: "default",
  // description: "This is App components",
};

export default App;
