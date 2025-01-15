import PropTypes from "prop-types";

const TestimonialCard = ({ title, company, testimonial, image, alt }) => {
  return (
    <div className="w-full max-w-[1200px] mx-auto h-full flex flex-col gap-y-6 bg-secondary rounded-3xl p-5 md:max-w-[60%] md:flex-row">
      <div className="flex flex-col gap-y-7">
        <h3 className="text-left text-lg font-bold text-primaryColor">{company}</h3>
        <p className="text-left text-sm leading-7 font-normal text-primaryColor">{testimonial}</p>
        <h3 className="text-left text-lg font-bold text-primaryColor">{title}</h3>
      </div>
      <div className="w-full">
        <img
          src={image}
          alt={alt}
          className="w-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  company: PropTypes.string.isRequired,
  testimonial: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
};

TestimonialCard.defaultProps = {
  testimonial: "",
  title: "",
  image: "",
  alt: "",
};

export default TestimonialCard;
