import React from "react";
import { connect } from "react-redux";

import Form from "./Form";
import Activities from "./Activities";
import CompleteTasks from "./CompleteTasks";
import IncompleteTasks from "./IncompleteTasks";

export default function Dashboard() {
  return (
    <div className="d-flex flex-row justify-content-around align-items-center">
      {/* <Form /> */}
      <div>
        <CompleteTasks />
        <IncompleteTasks />
      </div>
      <Activities />
    </div>
  );
}
