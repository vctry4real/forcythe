import logo from "../assets/logo.svg"
import facebook from "../assets/socials/facebook.svg"
import instagram from "../assets/socials/instagram.svg"
import linkedin from "../assets/socials/linkedin.svg"
import pinterest from "../assets/socials/pinterest.svg"
import x from "../assets/socials/x.svg"
import youtube from "../assets/socials/youtube.svg"

const Footer = () => {
  return (
    <footer className="w-full flex flex-col gap-y-10 py-10 bg-[#071626] text-white -mt-3 px-[22px] md:flex-row md:px-[120px] md:gap-x-36">
      
      {/* Newsletter form */}
      <div className="">
        {/* <h2 className="text-2xl font-bold mb-5">Subscribe to our Newsletter</h2> */}
        <form
          className="w-full flex flex-col gap-y-4 bg-[#071626] rounded-3xl "
        >
          <div className="w-full flex items-center justify-center  mx-auto bg-[#071626] rounded-3xl overflow-hidden">  
            <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-primaryColor bg-[#071626] border md:py-4 border-white text-sm outline-none"
            />
            <button
                type="submit"
                className="bg-white text-[#071626] px-6 py-3 text-sm font-semibold md:py-4 hover:bg-accent focus:ring-2 focus:ring-offset-2 focus:ring-accent"
            >
                Subscribe
            </button>
          </div>
          {/* Radio Button */}
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="notificationsConsent"
              name="notificationsConsent"
              className="w-4 h-4 text-accent bg-primaryColor border-white"
            />
            <label htmlFor="notificationsConsent" className="text-sm text-white md:text-base">
              I agree to receive other notifications from Forcythe
            </label>
          </div>
        </form>
      </div>

       {/* About Forcythe  */}
      <div className="md:left md:items-start md:justify-start ">
        <div>
            <img
                src={logo}
                alt="forcythe logo"
                className="md:w-[200px] md:h-[50px]  "
            />
            <p className="text-sm mt-3 text-secondaryText md:text-lg md:w-3/4">
                We are the growth company for businesses looking to scale. 
                We are dedicated to transforming businesses with bespoke 
                digital solutions that drive growth.
            </p>
        </div>
        {/* Social Media */}
        <div className=" hidden w-full  items-start mt-3 md:flex ">
            <ul className="flex gap-x-5">
                <li className="border border-accentText p-2 rounded-full">
                    <img
                        src={facebook}
                        alt="facebook "
                        className=""
                    />
                </li>
                <li className="border border-accentText p-2 rounded-full">
                    <img
                        src={instagram}
                        alt="instagram "
                    />
                </li>
                <li className="border border-accentText p-2 rounded-full">
                    <img
                        src={linkedin}
                        alt="linkedin "
                    />
                </li>
                <li className="border border-accentText p-2 rounded-full">
                    <img
                        src={pinterest}
                        alt="pinterest "
                    />
                </li>
                <li className="border border-accentText p-2 rounded-full">
                    <img
                        src={x}
                        alt="x "
                    />
                </li>
                <li className="border border-accentText p-2 rounded-full">
                    <img
                        src={youtube}
                        alt="youtube "
                    />
                </li>
            </ul>
        </div>
      </div>

      {/* Company */}
      <div className="flex flex-col gap-y-4">
        <h2 className="text-2xl font-bold mb-3 md:text-2xl ">Company</h2>
        <div>
            <ul className="flex flex-col  md:gap-y-1">
                <li className="text-accent md:text-xl font-semibold ">About</li>
                <li className="text-accent md:text-xl font-semibold">Services</li>
                <li className="text-accent md:text-xl font-semibold">Portfolio</li>
                <li className="text-accent md:text-xl font-semibold">Studio</li>
                <li className="text-accent md:text-xl font-semibold">Foundation</li>
                <li className="text-accent md:text-xl font-semibold">Careers</li>
                <li className="text-accent md:text-xl font-semibold">Blog</li>
            </ul>
        </div>
      </div>

      {/* Social Media */}
      <div className="w-full flex justify-center items-center md:hidden ">
        <ul className="flex gap-x-2">
            <li className="border border-accentText p-2 rounded-full">
                <img
                    src={facebook}
                    alt="facebook "
                />
            </li>
            <li className="border border-accentText p-2 rounded-full">
                <img
                    src={instagram}
                    alt="instagram "
                />
            </li>
            <li className="border border-accentText p-2 rounded-full">
                <img
                    src={linkedin}
                    alt="linkedin "
                />
            </li>
            <li className="border border-accentText p-2 rounded-full">
                <img
                    src={pinterest}
                    alt="pinterest "
                />
            </li>
            <li className="border border-accentText p-2 rounded-full">
                <img
                    src={x}
                    alt="x "
                />
            </li>
            <li className="border border-accentText p-2 rounded-full">
                <img
                    src={youtube}
                    alt="youtube "
                />
            </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
