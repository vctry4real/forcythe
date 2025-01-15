import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { TestimonialData } from "./DummyData";

const TestimonialDisplay = () => {
  // Initialize the first testimonial as the default selection
  const [selectedTestimonial, setSelectedTestimonial] = useState(TestimonialData[0]);

  // Function to handle selection
  const handleCompanyClick = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  return (
    <div className="testimonial-container">
      {/* Company List */}
      <div className="w-full h-full items-center justify-center border-2 my-10 border-secondary rounded-full overflow-x-auto">
        <ul className="company-list flex items-center justify-center gap-x-1 md:justify-between">
          {TestimonialData.map((testimonial) => (
            <li
              key={testimonial.id}
              className={`cursor-pointer py-5 px-2 rounded-lg ${
                selectedTestimonial?.id === testimonial.id ? "bg-secondary" : ""
              } md:w-full md:flex md:items-center md:justify-center`}
              onClick={() => handleCompanyClick(testimonial)}
            >
              <img
                src={testimonial.logo}
                alt={`${testimonial.company} logo`}
                className="w-40 h-10" // Larger size for clarity
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="px-[22px]">
        {/* Selected Testimonial */}
        {selectedTestimonial && (
          <TestimonialCard
            title={selectedTestimonial.title}
            company={selectedTestimonial.company}
            testimonial={selectedTestimonial.testimonial}
            image={selectedTestimonial.image}
            alt={selectedTestimonial.imageTitle}
          />
        )}
      </div>
    </div>
  );
};

export default TestimonialDisplay;
