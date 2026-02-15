import React from 'react'

function ButtonComponent({ text, onClick, className = "", icon="", functionaction="" }) {
  return (
    functionaction == "previous" ? (
      <button style={{borderRadius: "0px"}} className={className}  onClick={onClick}>
        {icon} {text}
      </button>
    ) : (
      <button style={{borderRadius: "0px"}} className={className}  onClick={onClick}>
        {text} {icon}
      </button>
    )
  )
}

export default ButtonComponent