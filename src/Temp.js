import React from "react"

function Temp() {
    return (
        <form method="POST" action="http://localhost:5000/encode">
            <input name="secret" type="text" />
            <button type="submit"> submit</button>
        </form>
    )
}

export default Temp
