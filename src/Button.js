import React from 'react'

export const Button = ({children, onClick}) => {
  const clickHandler = (event) => {
    event.preventDefault()
    onClick(event)
  }
  return (<button role="button" onClick={clickHandler}>{children}</button>)
}

export default Button