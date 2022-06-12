import logo from "./logo.svg"
import "./App.css"
import UploadComp from "./UploadComp"
import Download from "./Download"
import { Tabs } from "antd"
import "antd/dist/antd.css"
import Encode from "./Encode"
import Temp from "./Temp"
import Decode from "./Decode"
const { TabPane } = Tabs

function App() {
    return (
        <div className="app-container">
            <header className="header">
                <span>Video Steganography</span>
            </header>
            <div className="main">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Encode" key="1">
                        <Encode />
                    </TabPane>
                    <TabPane tab="Decode" key="2">
                        <Decode />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default App
