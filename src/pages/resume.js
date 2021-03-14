import React from 'react'
import resumeFile from "../assets/res.pdf"

const resume = () => {
    return (
        <div>
            <embed src={resumeFile} type="application/pdf" width="100%" height="600px" />
        </div>
    )
}

export default resume
