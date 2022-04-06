import React from "react";

const Index: React.FC = () => {
  return (
    <div className="page">
      <form action="/api/register">
        <h2>Sign-up for OnePwaa WSCamp Singapore</h2>
        <small>Team Name: </small>
        <input required name="team-name" />
        <br />
        <small>First Person Name: </small>
        <input required name="name-1" />
        <small> First Person Email: </small>
        <input required name="email-1" />
        <br />
        <small>Second Person Name: </small>
        <input required name="name-2" />
        <small> Second Person Email: </small>
        <input required name="email-2" />
        <br />
        <small>Third Person Name: </small>
        <input required name="name-3" />
        <small> Third Person Email: </small>
        <input required name="email-3" />
        <br />
        <button>Sign-up!</button>
      </form>
    </div>
  );
};

export default Index;
