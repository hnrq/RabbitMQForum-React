import React from "react";
import { ListItem } from "components/ListItem";
import "./SubjectsPage.scss";
import { subjects } from "utils/subjects";

const SubjectsPage = () => (
  <div className="container">
    <div className="jumbotron bg-white">
      <div className="row">
        <h1>Entre em uma matéria como aluno:</h1>
      </div>
      <div className="row">
        <div className="list-group">
          {subjects.map(({ name, teacher, id }) => (
            <ListItem
              title={name}
              key={id}
              subtitle={`Professor: ${teacher}`}
              linkTo={id}
            />
          ))}
        </div>
      </div>
      <div className="row">
        <h1>Entre em uma matéria como monitor:</h1>
      </div>
      <div className="row">
        <div className="list-group">
          {subjects.map(({ name, teacher, id }) => (
            <ListItem
              title={name}
              key={id}
              subtitle={`Professor: ${teacher}`}
              linkTo={`/monitor/${id}`}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SubjectsPage;
