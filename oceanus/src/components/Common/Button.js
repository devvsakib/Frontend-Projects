import React from 'react'

const Button = ({ content, rounded, func, cls }) => {
  return (
    <button onClick={func} className={`${cls && cls} bg-gradient-to-r from-[#FFA500] to-[#FF5C3D] transition-all duration-150 ease-linear ${rounded ? "w-12 h-12 grid place-content-center" : "px-6 py-2"} rounded-full z-10`}>{content}</button>
  )
}

export default Button