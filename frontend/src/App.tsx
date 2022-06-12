import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { isMemberName } from "typescript";

interface AppProps {
  message?: string;
  isMessage?: boolean;
}

const App: React.FunctionComponent<AppProps> = (props) => {
  // const { message, contact } = props;
  // const App = (props: AppProps) => {
  console.log(props.isMessage);
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
