
import PropTypes from "prop-types";

const Button = ({ text, className, Icon, iconClassName }) =>
{
    return (
        <button className={`${className}`}>
            <span>{text}</span> 
            {Icon && <Icon className={`ml-2 ${iconClassName}`} />}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,       // Button text
    className: PropTypes.string,            // Tailwind classes for button
    Icon: PropTypes.elementType,            // Dynamic icon component
    iconClassName: PropTypes.string,        // Tailwind classes for the icon
};

Button.defaultProps = {
    className: "",
    Icon: null,                             // No default icon
    iconClassName: "",                      // No default icon styling
};

export default Button