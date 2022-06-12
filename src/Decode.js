import { Button, Input } from "antd"
import React, { useState } from "react"

function Decode() {
    const [file, setFile] = useState([])
    const [text, setText] = useState("")
    const [seed, setSeed] = useState(undefined)
    const getSecret = (file) => {
        setText("")
        if (file.length === 0) {
            alert("please select a video file to decode")
            return false
        }
        if (seed === undefined) {
            alert("please enter a seed value")
            return false
        }
        console.log(file)
        console.log(file.name)
        const formData = new FormData()
        formData.append("file", file)
        formData.append("seed", seed)

        fetch("http://localhost:5000/decode", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((response) => setText(response.secret))
            .catch((error) => console.log(error.message))
    }
    return (
        <div className="upload-container">
            <Input
                type="number"
                placeholder="Enter a seed value"
                style={{ width: "100%", marginBottom: "0.5rem" }}
                onChange={(event) => setSeed(event.target.value)}
            />
            <input
                type="file"
                name="file"
                onChange={(event) => {
                    console.log(event.target.files[0])
                    setFile(event.target.files[0])
                }}
            />

            <div className="encode-btn" style={{ marginTop: "10px" }}>
                <Button type="primary" onClick={() => getSecret(file)}>
                    <p title="Upload video">Decode</p>
                </Button>
            </div>
            {text ? (
                <div>
                    <p>Decode Successful!!</p>
                    <span>
                        Decoded Text : <h3 font="1.2rem">{text}</h3>
                    </span>
                </div>
            ) : null}
        </div>
    )
}

export default Decode
