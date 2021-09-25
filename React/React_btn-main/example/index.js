import React from 'react'
import styles from './styles.module.css'

export const Button = ({ type, text }) => {
  return <Button className={styles[type]}>{text}</Button>
}