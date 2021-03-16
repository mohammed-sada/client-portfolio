import React from "react"

const Title = ({ title, color }) => {
  return (
    <div className="section-title">
      <h2>{title || "default title"}</h2>
      <div className={`underline ${color}`}></div>
    </div>
  )
}

export default Title
