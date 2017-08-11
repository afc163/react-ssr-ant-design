import React, {Component} from 'react'
import styles from '../sass/Header'
import imgAvatar from '../assets/avatar.png'

class Header extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <header className={styles.header}>
                <div className={styles.left}>
                    <span className={styles.span}>中台</span>
                </div>
                <div className={styles.right}>
                    <span className={styles.description}>Hello, world！mason</span>
                    <img className={styles.img} src={imgAvatar}/>
                </div>
            </header>
        )
    }
}

export default Header
