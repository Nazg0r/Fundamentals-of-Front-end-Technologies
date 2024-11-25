import React from 'react';
import styles from './GoodsCard.module.css';

const GoodsCard = ({image, name, price}) => {
    return (
        <div className={styles.goods_card}>
            <img
                src={image}
                alt="good card"
            />
            <div className={styles.good_name}>
                <p>Name: </p>
                <p>{name}</p>
            </div>
            <div className={styles.good_price}>
                <p>Price: </p>
                <p>{price} грн</p>
            </div>
        </div>
    );
};

export default GoodsCard;