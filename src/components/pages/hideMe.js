import React, { useState, useEffect } from "react";


function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("DarkCyan");

  useEffect(() => {
    console.log(`I'm inside the useEffect, count is ${count}`);

    return () => console.log("I'm cleaning up anything set up from above.");
    // This only runs the side effect if the count state changes
    // }, [count])

    // This only runs the side effect if the color state changes
    //}, [color])

    // This brings us back to listening to all state changes
    //}, [count, color])

    // This ignores all state updates.  React will not run effect on state change
    // }, [])

    // This will keep a loop going, vs. being controlled
    // })
  });

  function handleColorChange() {
    // console.log(color);
    const nextColor = color === "DarkCyan" ? "gold" : "DarkCyan";

    setColor(nextColor);
  }
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={handleColorChange}>Change Color</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>

      <h1 style={{ color }}>{count}</h1>
    </div>
  );
}
export default function HideMe() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ width: "100vw", display: "flex", alignItems: "center", justifyContent: "center", padding: " 30px, 30px, 30px, 30px"}}>

    <div className="App">
      <button onClick={() => setVisible(!visible)}>
        CLICK HERE
      </button>

      {visible && <Counter />}
      {/* {visible ? <Counter /> : null} */}
    </div>
    </div>
  );
}
