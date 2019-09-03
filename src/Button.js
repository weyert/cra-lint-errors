import React from 'react'

export const LinkButton = ({children, onClick}) => {
  const clickHandler = (event) => {
    event.preventDefault()
    onClick(event)
  }
  return (<button role="button" onClick={clickHandler}>{children}</button>)
}

export const Button = ({children, onClick}) => {
  const clickHandler = (event) => {
    event.preventDefault()
    onClick(event)
  }
  return (<a href="" onClick={clickHandler}>{children}</a>)
}

export default Button