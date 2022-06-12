import { AutoComplete, Input } from "antd"
import "./Upload.css"
import { Button } from "antd"
import { React, useState } from "react"
const { TextArea } = Input
const props = {
    name: "file",
    multiple: false,
    // action: "http://localhost:5000/encode",
    onChange(info) {
        // const { status } = info.file
        // if (status !== "uploading") {
        //     console.log(info.file, info.fileList)
        // }
        // if (status === "done") {
        //     message.success(`${info.file.name} file uploaded successfully.`)
        // } else if (status === "error") {
        //     message.error(`${info.file.name} file upload failed.`)
        // }
    },
    onDrop(e) {
        console.log("Dropped files", e.dataTransfer.files)
    },
}

const UploadComp = (props) => {
    // const { setFilename } = props
    const [filename, setFilename] = useState("")
    const [seed, setSeed] = useState(undefined)
    const [file, setFile] = useState([])
    const [secret, setSecret] = useState("")
    const handleSecretChange = (event) => {
        setSecret(event.target.value)
    }
    const handleUpload = (event) => {
        if (file.type !== "video/mp4") {
            alert("please select a video file")
            return false
        }
        if (secret.length === 0) {
            alert("Please Enter text to be encoded")
            return false
        }
        if (seed === undefined) {
            alert("please enter a seed value")
            return false
        }

        event.preventDefault()
        const formData = new FormData()
        formData.append("secret", secret)
        formData.append("file", file)
        formData.append("seed", seed)

        fetch("http://localhost:5000/encode", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((json) => {
                // console.log(json)
                if (json.status) {
                    alert(
                        `Data Encoded successfully,video "${json.filename}" downloaded to the donwloads folder :)`
                    )
                    // setFilename(json.filename)
                    console.log(json)
                } else {
                    alert(
                        "Something went wrong! please give the proper inputs :("
                    )
                }
            })
    }

    const onSelect = (value) => {
        console.log("onSelect", value)
    }
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="upload-container">
                <AutoComplete
                    style={{ width: "100%", marginBottom: "0.5rem" }}
                    onSelect={onSelect}
                >
                    <TextArea
                        placeholder="Enter Text to be Encoded"
                        className="custom"
                        name="secret"
                        style={{ height: "7rem" }}
                        onChange={handleSecretChange}
                    />
                </AutoComplete>
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

                <div className="encode-btn">
                    <Button type="primary" onClick={handleUpload}>
                        <p title="Upload video">Encode</p>
                    </Button>
                </div>
            </div>
            {filename !== "" ? (
                <div className="download-container">
                    <video width="100%" height="250" controls download muted>
                        {/* <source src="output.mp4" alt="video error" type="video/mp4" /> */}
                        <source
                            src={`C:/Users/rakes/Downloads/${filename}`}
                            alt="video error"
                            type="video/mp4"
                        />
                    </video>
                </div>
            ) : null}
        </div>
    )
}

export default UploadComp
