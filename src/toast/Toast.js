import React from "react";
import "./Toast.css";

function Toast({ msg }) {
  return <div className="toast">{msg}</div>;
}

export default Toast;
