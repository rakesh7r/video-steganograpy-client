import React, { useEffect, useState } from "react"
import Download from "./Download"
import UploadComp from "./UploadComp"
import "./Encode.css"

function Encode() {
    const [filename, setFilename] = useState("")
    return (
        <div className="Encode-container">
            <UploadComp
                setFilename={setFilename}
            />
            {/* {filename !== "" ? <Download filename={filename} /> : null} */}
        </div>
    )
}

export default Encode
