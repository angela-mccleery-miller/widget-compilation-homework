import React from "react";

function CurrentTime() {
  function renderTime() {
    return new Date().toLocaleTimeString();
  }
  return (
    <div style={{ width: "100vw", height: "45vh", border: "black", display: "flex", alignItems: "center", justifyContent: "center"}}>
    <div className="Ticker">
      <h1>{renderTime()}</h1>
    </div>
   </div>
  );
}

export default CurrentTime;
