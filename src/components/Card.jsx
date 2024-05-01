import React from 'react'

function Card({ children, className = "", onClick }) {
    return (
        <div className={`${className} border-2 border-black rounded-lg font-bold `}
            style={{ boxShadow: "3px 5px 0px 0px rgba(0,0,0,1)" }}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default Card