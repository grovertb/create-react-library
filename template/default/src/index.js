import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

function ExampleComponent(props) {
  const {
    text
  } = props

  return (
    <div className={styles.test}>
      Example Component: {text}
    </div>
  )
}

ExampleComponent.propTypes = {
  text: PropTypes.string
}

export default ExampleComponent
