import PropTypes from "prop-types";

const ImageScrollerRight = ({
    images,
    speed = 15,
    cardWidth = "200px",
    cardHeight = "300px",
    mdCardWidth = "250px", // default medium screen width
    mdCardHeight = "350px", // default medium screen height
    lgCardWidth = "300px", // default large screen width
    lgCardHeight = "400px", // default large screen height
}) => {
    return (
        <div className="scroller-container overflow-hidden relative w-full">
            <div
                className="scroller flex animate-scrollRight"
                style={{
                    animationDuration: `${speed}s`, // Set dynamic speed here
                    width: `calc(${images.length} * ${cardWidth} * 2)`, // Ensure the width is enough for both sets of images
                }}
            >
                {/* Map images to cards and repeat them for seamless scrolling */}
                {[...images, ...images].map((image, index) => (
                    <div
                        key={index}
                        className="card mx-2 flex-shrink-0"
                    >
                        <img
                            src={image}
                            alt={`image-${index}`}
                            className={`w-full h-full object-cover rounded-lg shadow-md 
                                ${cardWidth} ${cardHeight} 
                                md:${mdCardWidth} md:${mdCardHeight} 
                                lg:${lgCardWidth} lg:${lgCardHeight}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

ImageScrollerRight.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    speed: PropTypes.number, // Speed of the scrolling animation
    cardWidth: PropTypes.string, // Width of each card (default for mobile)
    cardHeight: PropTypes.string, // Height of each card (default for mobile)
    mdCardWidth: PropTypes.string, // Width of each card for medium screens
    mdCardHeight: PropTypes.string, // Height of each card for medium screens
    lgCardWidth: PropTypes.string, // Width of each card for large screens
    lgCardHeight: PropTypes.string, // Height of each card for large screens
};

export default ImageScrollerRight;
