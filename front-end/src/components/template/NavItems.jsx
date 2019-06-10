import './Nav.css'
import React from 'react'

export default props =>
    <a href={`${props.path}`}>
        <i className={`fa fa-${props.icon}`}></i>{props.text}
    </a> 