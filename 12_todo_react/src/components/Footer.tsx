import React from 'react'

// CSS
import styles from './Footer.module.css';

const Footer = () => {

  return (
      <div>
        <footer className={styles.footer}>
            <p>
                <span>React + TS Todo</span> @2026
            </p>
        </footer>
    </div>
  )
}

export default Footer