import React from "react"
import "./Download.css"

function Download(props) {
    const { filename } = props
    return (
        <div className="download-container">
            <video width="100%" height="250" controls download muted>
                {/* <source src="output.mp4" alt="video error" type="video/mp4" /> */}
                <source src={filename} alt="video error" type="video/mp4" />
            </video>
        </div>
    )
}

export default Download
