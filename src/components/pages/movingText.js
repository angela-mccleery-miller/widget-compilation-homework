import React, {useState} from "react"

export default function ToggleAlignment(props) {
   const [align, setAlign] = useState("")

    return (
            <div style={{ width: "100vw", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div className="Toggle">
                <h1 style={{ textAlign: align }}>Push Me</h1>
                <button onClick={() => setAlign("left")}>Left</button>
                <button onClick={() => setAlign("center")}>Center</button>
                <button onClick={() => setAlign("right")}>Right</button>

                </div>
            </div>
        )
    }