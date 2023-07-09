import React from "react";
import "./planItStyle.css";

export default function PlanIt(props) {
  return <li className="planIt">🎉 {props.yourPlanTask}</li>;
}
