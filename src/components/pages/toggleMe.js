import React, { useState } from "react";

function Greeting(props) {
  const [ salutation, setSalutation ] = useState("Guten Tag")

  return (
    <div style={{ width: "100vw", display: "flex", alignItems: "center", justifyContent: "center"}}>
    <div>
      <h1>{salutation}</h1>
      <button onClick={() => salutation == "Guten Tag" ? setSalutation("Tschuss") : setSalutation( "Guten Tag")}>Greetings!</button>
    </div>
    </div>
  );
}

export default Greeting;