import { useState } from 'react'

export default function App() {

    const [isListen,setIsListen] = useState(false)

    const onListen = () => {
        setIsListen(!isListen)
    }

    return (
        <>
            <div className="header">
                <span className="subject">
                    HUHU 👋
                </span>
                <span className="message">
                    What can i do your ya ?
                </span>
            </div>
            <div className="container">
                <div style={{display: !isListen ? "none" : "block"}}>
                    <p className="speech-text">
                        Bismillahirrahmanirrahim
                    </p>
                </div>
                <div style={{display: isListen ? "none" : "block"}}>
                    <p className="lg">
                        You can call me HUHUU (BETA)
                    </p>
                    <p>
                        Or
                    </p>
                    <p className="lg">
                        Click this button
                    </p>
                </div>
                <a onClick={onListen} style={{marginTop: isListen ? "35px" : "20px"}} href="#">
                    <img alt="mic-photo" height="20" src="https://cdn.icon-icons.com/icons2/1997/PNG/512/mic_microphone_podcast_record_voice_icon_123292.png"/>
                </a>
            </div>
            <div className="footer">
                <a href="https://github.com/Huhu-Extension" rel="noreferrer" target="_blank">
                    <img alt="github-icon" id="github-icon" height="15" src="https://cdn.icon-icons.com/icons2/936/PNG/512/github-logo_icon-icons.com_73546.png" />
                </a>
                <a href="https://github.com/Huhu-Extension" rel="noreferrer" target="_blank">
                    <img alt="paypal-icon" id="paypal-icon" height="15" src="https://cdn.icon-icons.com/icons2/836/PNG/512/PayPal_icon-icons.com_66756.png" />
                </a>
            </div>
        </>
    )
}