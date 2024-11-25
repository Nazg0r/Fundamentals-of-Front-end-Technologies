import React, {useEffect, useRef, useState} from 'react';
import ImageButtons from "../ImageButtons/ImageButtons";
import Image from "./Image/Image";

const Images = () => {
    const [images, setImages] = useState([
        {
            id: 0,
            link: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fzajezdy.radynacestu.cz%2Fimg%2Fw-900%2Ch-750%2F2018-07-27%2Fnaples-3.jpg&f=1&nofb=1&ipt=f71667a8c7f17267cd4403c8fcb9ea618a77adb1eaf32befca62e7b1af83aa44&ipo=images",
        },
    ]);

    const imageRefs = useRef([]);

    useEffect(() => {
        const lastImageRef = imageRefs.current.at(-1);
        if (lastImageRef !== null) lastImageRef.sizeCof = 1
    }, [images]);

    const increaseSize = () => {
        const imageRef = imageRefs.current.at(-1);
        if (imageRef.sizeCof >= 2) return;
        imageRef.sizeCof += 0.1;
        imageRef.style.transform = `scale(${imageRef.sizeCof})`;
    }

    const decreaseSize = () => {
        const imageRef = imageRefs.current.at(-1);
        if (imageRef.sizeCof <= 1) {
            alert("Зображення має мінімальний розмір");
            return;
        }
        imageRef.sizeCof -= 0.1;
        imageRef.style.transform = `scale(${imageRef.sizeCof})`;
    }

    const  addNew = () => {
        const imageUrl = prompt("Put image url here:");
        if (imageUrl === null || imageUrl === "") {
            alert("Incorrect input");
            return;
        }

        const newImage = {
            id: images.length,
            link: imageUrl
        }
        setImages((prev) => [...prev, newImage]);
    }

    const removeLast = () => {
        if (images.length === 0) {
            alert("There are no available images");
            return;
        }

        setImages((prev) => {
            const images = [...prev];
            const lastImage = images.pop();
            imageRefs.current = imageRefs.current.slice(0, lastImage.id)
            return images;
        });
    }

    return (
        <div>
            {images.map((image) => (
                <div className="image-decorator" key={image.id}>
                    <Image
                        imageLink={image.link}
                        ref={(el) => {
                            imageRefs.current[image.id] = el;
                        }}
                    />
                </div>
            ))}
            <ImageButtons addNew = {addNew} sizeUp = {increaseSize} sizeDown = {decreaseSize} remove={removeLast} />
        </div>
    );
};

export default Images;