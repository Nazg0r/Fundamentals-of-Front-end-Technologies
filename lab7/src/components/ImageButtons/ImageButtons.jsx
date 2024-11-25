import React from 'react';
import styles from './ImageButtons.module.css'

const ImageButtons = ({addNew, sizeUp, sizeDown, remove}) => {

    return (
        <div className={styles.buttons}>
            <button className={styles.btn} onClick={addNew}>Додати</button>
            <button className={styles.btn} onClick={sizeUp}>Збільшити</button>
            <button className={styles.btn} onClick={sizeDown}>Зменшити</button>
            <button className={styles.btn} onClick={remove}>Видалити</button>
        </div>
    );
};

export default ImageButtons;