import bg from "../assets/bg.svg"
import Button from "../components/Button"
import { FaPlay } from "react-icons/fa6";
import ImageScroller from "../components/ImageScroller";
import ImageScrollerRight from "../components/ImageScrollerRight";
import {ImageData} from "../components/ImageData";
import TestimonialDisplay from "../components/TestimonialDisplay";
import ApproachDisplay from "../components/ApproachDisplay";
import layerIcon from "../assets/layers-three.svg"
import SpeedCounter from "../components/SpeedCounter";
import { BlogPostData } from "../components/DummyData";

export default function LandingPage () {

     const CardDetails = [
        {
            id:1,
            Icon : layerIcon,
            title: "Experience",
            text: "Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.",
        },
        {
            id:2,
            Icon : layerIcon,
            title: "Quick Support",
            text: "We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.",
        },
        {
            id:3,
            Icon : layerIcon,
            title: "Cost Savings",
            text: "Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality.",
        },
    ]

    return (
        <main className="w-full h-full bg-primary pt-20 md:pt-32">
            <section className="w-full bg-primary min-h-screen relative px-[22px] md:px-[120px] ">
                {/* Image Container */}
                <div className="w-full h-full absolute inset-0">
                        <img
                        src={bg}
                        alt = "world map"
                        className="w-full h-full object-cover"
                        />
                </div>
                {/* Text Container */}
                <div className="w-full h-full flex flex-col gap-y-[22px] bg-white bg-opacity-10 relative z-10 rounded-3xl container p-5 py-8 mx-auto px-4 md:p-11 md:rounded-[3rem] ">
                        <div>
                            <h1 className=" text-[3rem] text-white font-semibold text-left tracking-wider leading-[68px] md:text-[6rem] md:font-normal md:leading-[90px] md:tracking-tight ">We build <span className="text-accentText">products</span> that <br/> shape a better future </h1>
                            <p className="text-secondaryText opacity-1 pt-[40px] font-normal text-lg md:leading-7 md:opacity-2 md:font-semibold">We&apos;re the architects of digital excellence across industries. 
                                We redefine business with <br/> cutting-edge digital strategies that invokes sector-wide transformation 
                            </p>
                        </div>

                        {/*Custom Button Container*/}
                        <div className="py-10">
                            <Button 
                                className="w-fit bg-primaryColor rounded-3xl flex items-center px-3 py-3" 
                                text="Book a call" 
                                Icon={FaPlay} 
                                iconClassName="" 
                            />
                        </div>
                </div>
            </section>

            {/*The Scrolling Images */}
            <section className="w-full flex flex-col gap-10 bg-primary z-20 ">
                <h1 className="text-primaryColor text-center text-3xl font-bold md:text-[2.6rem]">Success in <span className="text-accentText">Motion</span> - Our clients&apos; journey</h1>
                <div className="min-h-full flex flex-col mb-20 bg-primary">
                    {/* <ImageScroller images={ImageData} speed={15} cardWidth="200px" cardHeight="300px" /> */}
                    <ImageScroller 
                        images={ImageData} 
                        speed={40} 
                        cardWidth="200px" 
                        cardHeight="300px" 
                        mdCardWidth="250px" 
                        mdCardHeight="350px" 
                        lgCardWidth="300px" 
                        lgCardHeight="400px" 
                    />
                    <ImageScrollerRight 
                        images={ImageData} 
                        speed={40} 
                        cardWidth="200px" 
                        cardHeight="300px" 
                        mdCardWidth="250px" 
                        mdCardHeight="350px" 
                        lgCardWidth="300px" 
                        lgCardHeight="400px" 
                    />
                </div>
            </section>

            {/*Testiomanial */}
            <section className="w-full ">
                <h1 className="text-primaryColor text-center text-3xl line-clamp-4 tracking-wider font-bold md:text-[2.6rem]"> Discover the <span className="text-accentText">transformative stories</span> of <br/> startups that scaled new heights with us</h1>
                <div className="md:px-[120px]">
                    <TestimonialDisplay/>
                </div>
            </section>

            {/*Forcythe Approach*/}
            <section className=" pt-36 px-[22px] md:px-[120px] ">
                <h2 className="text-primaryColor text-left text-[2rem] font-semibold md:mb-8 md:text-[2.6rem] md:leading-[3rem]">From <span className="text-accentText">Spark</span> to <span className="text-accentText">Spotlight:</span> we take you <br/> every step of the way to success.</h2>
                <ApproachDisplay />
            </section>


            {/* Your best */}
            <section className=" bg-custom-bg mt-20 md:flex md:flex-col md:gap-y-7 md:-mt-56">
                <div className="px-[22px] md:px-[120px]">
                    <h1 className="text-accent text-center text-4xl leading-[50px] font-semibold md:text-[2.6rem]"> Your best call for B2B/B2C product innovation</h1>
                </div>
                <div className=" flex flex-col gap-y-10 px-[22px] rounded-xl pt-7 md:px-[120px] md:flex-row md:gap-x-10">
                    {CardDetails.map((detail) =>(
                        <div key={detail.id} className="w-full  bg-primary rounded-2xl text-white py-6 px-[22px]">
                            <img
                                src={detail.Icon}
                                alt={detail.title}
                                className="bg-[#3b6694] p-2 rounded-lg"
                            />
                            <h2 className="mt-4 text-xl font-bold">{detail.title}</h2>
                            <p className="mt-4 text-secondaryText">{detail.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* The arc */}
            <section className="w-full bg-custom-bg-invert flex flex-col gap-y-36   pt-24 ">
                <div className="w-full flex flex-col gap-y-6 bg-[url('/arc.svg')] bg-custom-small bg-center bg-no-repeat pt-28 px-[22px] md:px-[120px] md:bg-custom-large ">
                    <h2 className="text-primaryColor text-center text-xl px-[2px]">We build solutions that help <br/> <span className="text-accentText">business</span> of all sizes to <span className="text-accentText">scale</span></h2>
                    {/* Counter container */}
                    <div className="flex gap-x-1 items-center justify-center md:gap-x-0 md:px-[430px] ">
                        <div className="w-full flex flex-col items-center justify-center gap-y-3">
                            <SpeedCounter endValue={50} duration={1500} />
                            <h3 className="text-sm text-primaryColor font-medium">Clients</h3>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center gap-y-3">
                            <SpeedCounter endValue={120} duration={1500} />
                            <h3 className="text-sm text-primaryColor font-medium">Projects</h3>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center gap-y-3">
                            <SpeedCounter endValue={10} duration={1500} />
                            <h3 className="text-sm text-primaryColor font-medium ">Team Leads</h3>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center gap-y-3">
                            <SpeedCounter endValue={10} duration={1500} />
                            <h3 className="text-sm text-primaryColor font-medium">Glorious Years</h3>
                        </div>
                        
                    </div>
                </div>


                <div className="w-full px-[22px] flex flex-col gap-y-10 md:px-[120px] ">    
                    <div className="w-full flex flex-col gap-y-10 md:flex-row md:justify-between ">
                        <h1 className="text-primaryColor text-4xl font-semibold md:text-[2.6rem]">Read our articles, news and product blog</h1>
                        <Button 
                            className="w-fit bg-primaryColor rounded-3xl flex items-center px-3 py-3"
                            text="Book a call"
                            Icon={FaPlay}
                        />
                    </div>
                    <div className="flex flex-col gap-y-10 md:flex-row md:gap-x-10">
                        {
                            BlogPostData.map((post)=>(
                                <div key={post.id} className="flex flex-col gap-y-10" >
                                    <img 
                                        src={post.image}
                                        className="rounded-2xl"
                                    />
                                    <div className="border-l border-secondaryText pl-5 flex flex-col gap-y-5">
                                        <h3 className="text-lg font-semibold text-white ">{post.heading}</h3>
                                        <p className="text-sm font-normal text-secondaryText">{post.date}</p>
                                        <p className="text-lg font-semibold text-white">{post.title}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
                        
             {/* Call To Action*/}
            <section className="py-36 px-[22px] bg-custom-bg-second flex flex-col gap-y-8 items-center justify-center  ">
                <h1 className="text-primaryColor text-4xl text-center font-medium md:text-[2.6rem] md:w-1/2 *:md:leading-[4rem]"><span className="text-accentText">Ready to Scale?</span> <br/> Join successful brands that chose us as their <span className="text-accentText">growth accelerator</span> </h1>
                <Button 
                    className="w-fit bg-primaryColor rounded-3xl flex items-center px-3 py-3 md:text-2xl md:font-semibold"
                    text="Book a call"
                    Icon={FaPlay}
                />
            </section>
            
            
        </main>
    )
}