import React from 'react'

export default function Header(props) {

  console.log("header props....",props)
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em",
    backgroundColor: "#036",
    color: "#fff",
    textAlign: "center"
  }
  return (
    <div>
        <div style={headerStyle}>
          <h1>HEADER</h1>
          <h2>{props.title}</h2>
          <h3>{props.ind}</h3>
          <h4>{props.ff.Mg}</h4>
          <h4>{props.ff.Bs}</h4>
        </div>
    </div>
  )
}
