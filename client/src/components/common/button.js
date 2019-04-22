import React from 'react'

const button = (props) => {
    return <button className="btn" {...props}>{props.label}</button>
}
export default button
