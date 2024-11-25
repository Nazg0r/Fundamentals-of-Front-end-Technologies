import React from 'react';
import GoodsCard from './GoodsCard/GoodsCard';
import styles from './GoodsGallery.module.css'

const GoodsGallery = () => {
    const [goodCards] = React.useState([
        {
            id : 0,
            src: "https://hotline.ua/img/tx/494/494377017_s265.jpg",
            name: "Brain Apex Double",
            price: 2270
        },
        {
            id : 1,
            src: "https://hotline.ua/img/tx/446/446744155_s265.jpg",
            name: "Salmo Diamond Pole Light",
            price: 2058
        },
        {
            id : 2,
            src: "https://hotline.ua/img/tx/494/494378209_s265.jpg",
            name: "Daiwa Black Widow Carp 17",
            price: 2599
        },
        {
            id : 3,
            src: "https://hotline.ua/img/tx/447/447393702_s265.jpg",
            name: "Brain Classic",
            price: 1793
        },
        {
            id : 4,
            src: "https://hotline.ua/img/tx/685/685338_s265.jpg",
            name: "Lineaeffe Next Fissa 3",
            price: 361
        },
        {
            id : 5,
            src: "https://hotline.ua/img/tx/426/426239700_s265.jpg",
            name: "Flagman Ice Rod",
            price: 960
        }
    ]);

    return (
        <div>
            <h2>Завдання 2</h2>
            <div className={styles.goods_gallery}>
                {goodCards.map((item) =>
                    <div key={item.id}>
                        <GoodsCard
                            image = {item.src}
                            name={item.name}
                            price={item.price}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default GoodsGallery;