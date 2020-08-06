import React from "react";
import { connect } from "react-redux";

import Form from "./Form";
import Activities from "./Activities";

export default function Dashboard() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form />
      <Activities />
    </div>
  );
}
