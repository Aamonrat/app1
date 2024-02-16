import React from 'react'
import { BrowserRoute,Link } from 'react-router-dom'

export default function Router1(){
    const navStyle = {
        backgroundColor:'#ced',
        padding:'7px',
        textAlign:'center'
    }

    const linkStyle ={
        display:'inline-block',
        color:'7px',
        textDecoration:'none',
    }

    return(
        <BrowserRoute>
            <nav style={navStyle}>
                <Link to = "/" style={linkStyle}>Home</Link>-&nbsp;
                <Link to = "/product" style={linkStyle}>Product</Link>-&nbsp;
                <Link to = "/member" style={linkStyle}>Member</Link>-&nbsp;
                <Link to = "/contact" style={linkStyle}>Contact</Link>-&nbsp;
            </nav>
        </BrowserRoute>
    )
}