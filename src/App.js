import React from "react";
import { SubjectsPage } from "./pages/SubjectsPage";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ChatPage } from "./pages/ChatPage";
import { Header } from "components/Header";
import configureStore from "store";
import "./App.css";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={SubjectsPage} />
        <Route
          exact
          path="/:subject"
          render={props => {
            return <ChatPage key={props.match.params.subject} {...props} />;
          }}
        />
        <Route
          exact
          path="/monitor/:subject"
          render={props => {
            return <ChatPage key={props.match.params.subject} {...props} />;
          }}
        />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
