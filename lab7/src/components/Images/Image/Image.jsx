import React, {} from 'react';

const Image = React.forwardRef(({ imageLink }, ref) => {
    return (
        <div>
            <img
                src={imageLink}
                alt="random img"
                ref={ref}
            />
        </div>
    );
});

export default Image;