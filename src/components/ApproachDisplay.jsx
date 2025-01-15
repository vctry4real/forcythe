import { useState } from "react";
import { ApproachData } from "./DummyData";
import Button from "./Button";
import { FaPlay } from "react-icons/fa6";

const ApproachDisplay = () =>{
    const [selectedApproach,setSelectedApproach] = useState(ApproachData[0])

    const handleApproachClick = (approach) =>{
        setSelectedApproach(approach)
    }

    return (
        <div className="w-full grid md:grid-cols-2 md:gap-x-10 md:grid-rows-2 ">
          {/* First Column */}
          <div>
            <div className="w-full h-fit items-center justify-center border-2 my-10 border-accent rounded-full overflow-x-auto md:col-span-1 md:row-span-1">
                <ul className="company-list flex items-center justify-around px-3 py-5">
                {ApproachData.map((approach) => (
                    <li
                    key={approach.id}
                    className={`w-2/3 cursor-pointer py-3 px-3 rounded-full text-center text-primaryColor md:rounded-full ${
                        selectedApproach?.id === approach.id ? "bg-accent rounded-full text-primary " : ""
                    }`}
                    onClick={() => handleApproachClick(approach)}
                    >
                    {approach.step}
                    </li>
                ))}
                </ul>
            </div>
            {/* Third Column */}
            {selectedApproach && (
                <div className="w-full flex flex-col gap-y-10 md:col-span-3 md:row-start-2">
                <div className="flex flex-col gap-y-10">
                    <h1 className="text-3xl text-white font-bold">{selectedApproach.title}</h1>
                    <p className="text-secondaryText text-lg font-bold">{selectedApproach.text}</p>
                    <Button
                    className="w-fit bg-primaryColor rounded-3xl flex items-center px-3 py-3"
                    text="Book a call"
                    Icon={FaPlay}
                    />
                </div>
                <div className="md:hidden">
                    <img
                    src={selectedApproach.image}
                    alt={selectedApproach.step}
                    />
                </div>
                </div>
            )}
          </div>
      
          {/* Second Column */}
          <div className="hidden md:block md:col-span-1 md:row-span-1">
            {selectedApproach && (
              <div>
                <img
                  src={selectedApproach.image}
                  alt={selectedApproach.step}
                />
              </div>
            )}
          </div>
      
          
        </div>
      );
      
}

export default ApproachDisplay