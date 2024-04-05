import Socials from "./components/Socials";
import Testimonial from "./components/Testimonial";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function App() {
  const [open, setOpen] = useState(false);
  let prevScroll = 0;
  let header;

  useEffect(() => {
    header = document.getElementById("nav");
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const checkScroll = () => {
    let curScroll = window.pageYOffset;

    if (curScroll <= 0) {
      header?.classList.remove("scroll-up");
    }

    if (curScroll > prevScroll && !header?.classList.contains("scroll-down")) {
      header?.classList.remove("scroll-up");
      header?.classList.add("scroll-down");
    }

    if (curScroll < prevScroll && header?.classList.contains("scroll-down")) {
      header?.classList.remove("scroll-down");
      header?.classList.add("scroll-up");
    }
    prevScroll = curScroll;
  };

  window.addEventListener("scroll", checkScroll);

  return (
    <>
      <nav
        id="nav"
        className=" h-[70px] fixed z-50 top-0 left-0  w-full text-[#041d30]"
      >
        <div className="container px-4 m-auto flex justify-between items-center h-full">
          <div>
            <h4 className="text-2xl text-white">SAUC</h4>
          </div>
          <div className="hidden sm:flex items-center">
            <ul className="flex items-center">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#contact">Contact</a>
              </li>
            </ul>
            <div>
              <button className="btn">Download Cv</button>
            </div>
          </div>
          <div className="sm:hidden bg-[#f68338] p-2 flex items-center">
            <button
              className={
                open
                  ? "navbar-toggler navbar-toggler-right"
                  : "navbar-toggler navbar-toggler-right collapsed"
              }
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setOpen((prev) => !prev)}
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>
          </div>
          {open && (
            <div className="mobile-menu sm:hidden block absolute  bg-[#f68338] m-auto top-[80px] py-3">
              <ul className="flex flex-col items-center w-full">
                <li>
                  <a className="py-3 block" href="/">
                    Home
                  </a>
                </li>
                <li onClick={() => setOpen((prev) => !prev)}>
                  <a className="py-3 block" href="/#about">
                    About
                  </a>
                </li>
                <li onClick={() => setOpen((prev) => !prev)}>
                  <a className="py-3 block" href="/#contact">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="flex justify-center">
                <button className="btn mb">Download Cv</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main>
        {/* Hero Fixed */}

        <section>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="fixed-side shrink-0">
              <img src="/images/seun.png" alt="" />
            </div>

            <div className=" flex-1">
              {/* Hero */}
              <div className="relative overflow-x-clip">
                <div className="hero-content container m-auto">
                  <div>
                    <div>
                      <Reveal >
                        <h2 className="text-[34px] sm:text-[60px] font-bold text-[#171717]">
                          Seun Ogundiran
                        </h2>
                      </Reveal>
                      <Reveal>
                        <p className="mb-6  text-gray-600">
                          Hello I am a{" "}
                          <span className="text-[#f68338] font-bold">
                            Graphic Designer
                          </span>{" "}
                          from San Francisco. I have rich experience of 5+ years
                          in web site design and app design, also I am good at
                          extraordinary design concept. I love to hear from you
                          about your unique needs.
                        </p>
                      </Reveal>
                    </div>
                    <Reveal>
                      <div>
                        <button className="btn mr-1 sm:mr-3">
                          Contact with Me
                        </button>
                        <button className="btn b-btn">Hire Me</button>
                      </div>
                    </Reveal>
                    <Reveal>
                      <Socials />
                    </Reveal>
                  </div>
                </div>
                <div className="section-text">Seun</div>
              </div>
              {/* End Hero */}

              <div id="about" className="relative overflow-x-clip">
                <div className="w-[650px] max-w-[95%] mx-auto">
                  {/* About Section */}

                  <div className="section about-section">
                    <div className="header">
                      <h2>About Me</h2>
                    </div>
                    <div className="content">
                      <Reveal width="100%">
                        <h4  className="h4"> I Am A Product Designer,</h4>
                      </Reveal>
                      <Reveal width="100%">
                        <h4  className="h4">Specialized In UI/UX Design &</h4>
                      </Reveal>
                      <Reveal width="100%">
                        <h4  className="h4"> Digital Design</h4>
                      </Reveal>

                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, seddiam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum.
                      </p>

                      <div className="flex flex-wrap my-4 gap-4">
                        <ul>
                          <li>
                            <span>Age:</span> 26 Years
                          </li>
                          <li>
                            <span>Residence:</span> San Francisco
                          </li>
                          <li>
                            <span>Address:</span>
                            <a href="/#">12/7, Mc Street, Canada</a>
                          </li>
                        </ul>

                        <ul>
                          <li>
                            <span>Phone:</span>
                            <a href="tel:+00932123456">+009 321 23456</a>
                          </li>
                          <li>
                            <span>Email:</span>
                            <a href="mailto:hello@reton.com">hello@reton.com</a>
                          </li>
                          <li>
                            <span>Website:</span>
                            <a target="_blank" href="/#">
                              www.seun.com
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* What i do section */}

                  <div className="section what-section">
                    <div className="header">
                      <h2>What i do</h2>
                    </div>

                    <div className="content">
                      <Reveal width="100%">
                        <h4  className="h4">Here Are My All Skills</h4>
                      </Reveal>

                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, seddiam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum.
                      </p>

                      <div className="grid grid-cols-2 my-[50px] gap-4">
                        <div className=" text-center">
                          <div className="flex justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="60"
                              height="60"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#f68338"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                              <path d="M2 2l7.586 7.586"></path>
                              <circle cx="11" cy="11" r="2"></circle>
                            </svg>
                          </div>
                          <h4 className="font-semibold text-lg my-3 text-gray-800">
                            Illustration
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor
                          </p>
                        </div>
                        <div className=" text-center">
                          <div className="flex justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="60"
                              height="60"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#f68338"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
                              <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
                              <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
                              <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
                              <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
                            </svg>
                          </div>
                          <h4 className="font-semibold text-lg my-3 text-gray-800">
                            Illustration
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor
                          </p>
                        </div>

                        <div className=" text-center">
                          <div className="flex justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="60"
                              height="60"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#f68338"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
                              <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
                              <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
                              <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
                              <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
                            </svg>
                          </div>
                          <h4 className="font-semibold text-lg my-3 text-gray-800">
                            Illustration
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor
                          </p>
                        </div>

                        <div className=" text-center">
                          <div className="flex justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="60"
                              height="60"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#f68338"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                              <path d="M2 2l7.586 7.586"></path>
                              <circle cx="11" cy="11" r="2"></circle>
                            </svg>
                          </div>
                          <h4 className="font-semibold text-lg my-3 text-gray-800">
                            Illustration
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Portfolio Section */}

                  <div className="section what-section">
                    <div className="header">
                      <h2>PORTFOLIO</h2>
                    </div>
                    <div className="content">
                      <Reveal width="100%">
                        <h4  className="h4">See My Works Which Will Amaze You</h4>
                      </Reveal>

                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, seddiam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 my-[50px] gap-4">
                        <div className="p-card h-[300px] relative">
                          <div className=" preview h-full w-full">
                            <img
                              className="object-cover h-full w-full"
                              src="/images/portfolio1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="p-details absolute bottom-0 bg-[#181412] p-3">
                            <div className="p-title">
                              <h4 className="font-semibold text-white">
                                Food Illustration
                              </h4>
                              <p className="text-gray-200 text-sm">
                                Illustration
                              </p>
                            </div>
                            <p className="text-gray-200 my-4">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Maiores, alias.
                            </p>
                          </div>
                        </div>

                        <div className="p-card h-[300px] relative">
                          <div className=" preview h-full w-full">
                            <img
                              className="object-cover h-full w-full"
                              src="/images/portfolio1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="p-details absolute bottom-0 bg-[#181412] p-3">
                            <div className="p-title">
                              <h4 className="font-semibold text-white">
                                Food Illustration
                              </h4>
                              <p className="text-gray-200 text-sm">
                                Illustration
                              </p>
                            </div>
                            <p className="text-gray-200 my-4">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Maiores, alias.
                            </p>
                          </div>
                        </div>

                        <div className="p-card h-[300px] relative col-span-1 sm:col-span-2">
                          <div className=" preview h-full w-full">
                            <img
                              className="object-cover h-full w-full"
                              src="/images/portfolio3.jpg"
                              alt=""
                            />
                          </div>
                          <div className="p-details absolute bottom-0 bg-[#181412] p-3">
                            <div className="p-title">
                              <h4 className="font-semibold text-white">
                                Food Illustration
                              </h4>
                              <p className="text-gray-200 text-sm">
                                Illustration
                              </p>
                            </div>
                            <p className="text-gray-200 my-4">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Maiores, alias.
                            </p>
                          </div>
                        </div>

                        <div className="p-card h-[300px] relative">
                          <div className=" preview h-full w-full">
                            <img
                              className="object-cover h-full w-full"
                              src="/images/portfolio1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="p-details absolute bottom-0 bg-[#181412] p-3">
                            <div className="p-title">
                              <h4 className="font-semibold text-white">
                                Food Illustration
                              </h4>
                              <p className="text-gray-200 text-sm">
                                Illustration
                              </p>
                            </div>
                            <p className="text-gray-200 my-4">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Maiores, alias.
                            </p>
                          </div>
                        </div>

                        <div className="p-card h-[300px] relative">
                          <div className=" preview h-full w-full">
                            <img
                              className="object-cover h-full w-full"
                              src="/images/portfolio1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="p-details absolute bottom-0 bg-[#181412] p-3">
                            <div className="p-title">
                              <h4 className="font-semibold text-white">
                                Food Illustration
                              </h4>
                              <p className="text-gray-200 text-sm">
                                Illustration
                              </p>
                            </div>
                            <p className="text-gray-200 my-4">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Maiores, alias.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimony section */}

                  <div className="section what-section">
                    <div className="header">
                      <h2>What i do</h2>
                    </div>
                    <div className="content">
                      <Reveal width="100%">
                        <h4 className="h4">
                          What Our{" "}
                          <span className="text-[#f68338]">Clients</span> Say
                        </h4>
                      </Reveal>

                      <div className="">
                        <Testimonial />
                      </div>
                    </div>
                  </div>

                  {/* Contact Section */}

                  <div className="section what-section" id="contact">
                    <div className="header">
                      <h2>CONTACT</h2>
                    </div>
                    <div className="content">
                      <Reveal width="100%">
                        <h4  className="h4">
                          Have You Any{" "}
                          <span className="text-[#f68338]">Project? </span>{" "}
                          Please Drop A Message
                        </h4>
                      </Reveal>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, seddiam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum.
                      </p>

                      <div className="flex flex-col sm:flex-row my-[50px] gap-4 items-center">
                        <div className="w-full sm:w-[60%]">
                          <form>
                            <div className="field">
                              <input
                                type="text"
                                name="name"
                                placeholder="Name"
                              />
                            </div>

                            <div className="field">
                              <input
                                type="email"
                                name="email"
                                placeholder="Email"
                              />
                            </div>

                            <div className="field">
                              <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                              />
                            </div>

                            <div className="field">
                              <textarea
                                name="message"
                                id=""
                                placeholder="Message"
                                cols="30"
                                rows="10"
                              ></textarea>
                            </div>

                            <button className="btn b-btn block mt-2">
                              Send Message
                            </button>
                          </form>
                        </div>
                        <div className="col-span-1">
                          <div className="">
                            <div className="contact-content">
                              <div className="top">
                                <ul>
                                  <li className="my-3">
                                    <span className="font-bold">Phone:</span>
                                    <a href="tel:+00932123456">
                                      +009 321 23456
                                    </a>
                                  </li>
                                  <li className="my-3">
                                    <span className="font-bold">Email:</span>
                                    <a href="mailto:hello@reton.com">
                                      hello@reton.com
                                    </a>
                                  </li>
                                  <li className="my-3">
                                    <span className="font-bold">Website:</span>
                                    <a href="#" target="_blank">
                                      www.seun.com
                                    </a>
                                  </li>
                                  <li className="my-3">
                                    <span className="font-bold">Address:</span>
                                    <a href="#" target="_blank">
                                      12/7, Mc Street, Us
                                    </a>
                                  </li>
                                </ul>
                              </div>

                              <div className="bottom">
                                <Socials />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="section-text">About</div> */}
              </div>
              <footer className="h-[50px]  text-xs sm:text-base  text-center flex items-center justify-center">
                Copyright @2023 Design & Developed by{" "}
                <a
                  href="https://emmanueltaiwo.com"
                  className="text-[#f68338] font-bold mx-2"
                >
                  Emmer
                </a>
              </footer>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

// eslint-disable-next-line react/prop-types
const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
