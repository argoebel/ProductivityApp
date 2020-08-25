import React from "react";
import { connect } from "react-redux";

import ActivityForm from "./ActivityForm";
import Activities from "./Activities";
import CompleteTasks from "./CompleteTasks";
import IncompleteTasks from "./IncompleteTasks";
import TaskForm from "./TaskForm";

export default function Dashboard() {
  return (
    <div className="d-flex flex-row justify-content-around align-items-center">
      <div>
        <CompleteTasks />
        <IncompleteTasks />
      </div>
      <Activities />
    </div>
  );
}
