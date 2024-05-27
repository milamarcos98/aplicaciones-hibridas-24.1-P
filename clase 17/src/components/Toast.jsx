import React from 'react'
import styles from './Toast.module.scss'
import classNames from 'classnames/bind'

const Toast = ({message, type, position="top-left"}) => {
  const clss = classNames.bind(styles)
  let classes = clss("toast-container", "toast-" + type , "position-" + position)
  return (
    // <div className={"toast-container toast-" + type +  " position-" + position}>
    <div className={classes}>
      <p>{message}</p>
    </div>
  )
}

export default Toast