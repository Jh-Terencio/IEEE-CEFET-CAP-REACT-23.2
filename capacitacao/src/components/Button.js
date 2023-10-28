import React from "react";

export default function Button({text, fx}) {

  return (
    <button type="button" onClick={fx}>
      {text}
    </button>
  )
}