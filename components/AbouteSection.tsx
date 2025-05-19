import { MdContactMail, MdWorkHistory } from "react-icons/md";
import { SectionTitle } from "./SectionTitle";
import { title2, title3 } from "./primitives";
import Image from "next/image";
import { FaTelegramPlane, FaTools, FaUserSecret } from "react-icons/fa";
import { Chip } from "@heroui/chip";
import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";
import { siteConfig } from "@/config/site";
import { IoMdMail } from "react-icons/io";
const jobs = [
  {
    start: "2025",
    end: "Current position",
    title: "Frontend Engineer - Arbitrage Marketing Company",
    stack: ["Next.js", "Hero UI", "Chart JS"],
    experience: [
      "Currently leading frontend development in a small, agile team, designing and evolving a custom CRM for performance marketing with rapidly changing business logic.",
      "I make tech decisions based on the problem at hand, balancing speed and maintainability, while closely collaborating with the backend and stakeholders to deliver scalable features.",
    ],
  },
  {
    start: "2024",
    end: "2025",
    title: "Frontend Developer  - Performance Marketing Studio",
    stack: ["JavaScript", "Gulp", "Webpack"],
    experience: [
      "Built high-converting marketing websites focused on client acquisition and product sales, with an emphasis on performance, SEO, and engaging, pixel-perfect animations. ",
      "Optimized development workflows and production builds using Gulp and Webpack.",
    ],
  },
  {
    start: "2022",
    end: "2024",
    title: "Web Developer - IT Outsourcing Company ",
    stack: ["JavaScript", "WordPress (custom themes & plugins)", "Next.js", "Redux", "Material UI", "WebSockets"],
    experience: [
      "I built and maintained websites using JavaScript, Next.js, and WordPress, working with both custom themes and existing solutions. Later, took part in developing a custom CRM system from scratch, which expanded to a 6-person team.",
      "The stack included Next.js, Redux, WebSockets, and Material UI, with complex modules like a built-in task manager to streamline workflows. Gained solid experience in full-stack development and large-scale system design.",
    ],
  },
];
export const AbouteSection = () => {
  return (
    <section id="resume" className="flex flex-col gap-4 py-3 md:py-16">
      <div className="flex-1 flex flex-col gap-8">
        <SectionTitle
          subtitle="About me"
          title={
            <>
              Combining design thinking with engineering precision to build <span>Standout Digital Products</span>.
            </>
          }
        />
        <div className=" flex lg:gap-6 gap-4  md:flex-row flex-col relative">
          <div className="flex flex-col gap-6 md:gap-4">
            <Card radius="sm">
              <CardBody className="flex flex-col gap-6 lg:p-6">
                <div className="flex items-center gap-4">
                  <FaUserSecret size={24} className="opacity-60" /> <h3 className={title2()}>Who I Am</h3>
                </div>

                <div className="flex flex-col gap-3">
                  <p>
                    I’m software engineer with over 3 years of experience helping businesses turn ideas into scalable,
                    high-performance, and visually engaging web products.
                  </p>
                  <p>
                    Throughout my journey, I’ve built everything from landing pages and WordPress sites to full-scale
                    CRM systems - for both IT service providers and performance marketing teams. I understand how
                    products work not only from a coding perspective, but also from a business and user-experience
                    angle.
                  </p>

                  <p>
                    {" "}
                    I focus on building thoughtful user interfaces that don’t just work, but actually convert, stand
                    out, and drive engagement.
                  </p>
                </div>
              </CardBody>
            </Card>
            <Card radius="sm">
              <CardBody className="flex flex-col gap-6 lg:p-6 ">
                <div className="flex gap-4 items-center">
                  <MdWorkHistory className="opacity-60" size={24} />
                  <h3 className={title2()}>Experience</h3>
                </div>
                {jobs.map((job) => (
                  <div
                    key={job.title}
                    className="flex flex-col gap-[16px] border-l-1 border-[rgba(128,128,128,0.52)] pl-4"
                  >
                    <div className="flex flex-col gap-0">
                      <h4 className={title3()}>{job.title}</h4>
                      <div className="text-sm opacity-70">{`${job.start} - ${job.end}`}</div>
                    </div>
                    <div className="flex flex-col gap-2">
                      {job.experience.map((el) => (
                        <div key={el}>{el}</div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      {job.stack.map((el) => (
                        <Chip key={el} color="primary" variant="flat">
                          {el}
                        </Chip>
                      ))}
                    </div>
                  </div>
                ))}
              </CardBody>
            </Card>
          </div>

          <div className="lg:min-w-[370px] min-w-[280px]  flex-1 flex flex-col gap-6 md:gap-4 ">
            <Card radius="sm">
              <CardBody className="flex flex-col gap-6 lg:p-6 ">
                <div className="flex gap-4 items-center">
                  <FaTools className="opacity-60" size={20} />
                  <h3 className={title2()}>Tools</h3>
                </div>
                <div className="flex gap-3 lg:gap-5 items-center flex-wrap">
                  <div className="flex w-[150px] items-center gap-2">
                    <Image alt="Icon" src="/react.png" width={30} height={30} />
                    <div>React</div>
                  </div>
                  <div className="flex w-[150px] items-center gap-2">
                    <div className="w-[30px] flex justify-center items-center ">
                      <svg height="18" role="img" viewBox="0 0 74 64">
                        <path
                          d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
                          className="fill-black dark:fill-white"
                        />
                      </svg>
                    </div>

                    <div>Next.JS</div>
                  </div>
                  <div className="flex w-[150px] items-center gap-2">
                    <div className="w-[30px] flex justify-center items-center ">
                      <Image alt="Icon" src="/ts.png" width={28} height={28} />
                    </div>

                    <div>Typescript</div>
                  </div>
                  <div className="flex w-[150px] items-center gap-2">
                    <Image alt="Icon" src="/redux.svg" width={30} height={30} />
                    <div>Redux</div>
                  </div>
                  <div className="flex w-[150px] items-center gap-2">
                    <div className="w-[30px] flex justify-center">
                      <Image alt="Icon" src="/figma.png" width={26} height={32} />
                    </div>

                    <div>Figma</div>
                  </div>
                  <div className="flex w-[150px] items-center gap-2">
                    <div className="w-[30px] flex justify-center">
                      <svg
                        height="32"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        version="1.1"
                        width="32"
                        data-view-component="true"
                        className="octicon octicon-mark-github v-align-middle"
                      >
                        <path
                          className="fill-black dark:fill-white"
                          d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z"
                        ></path>
                      </svg>
                    </div>

                    <div>Git</div>
                  </div>
                  <div className="flex w-[150px] items-center gap-2">
                    <div className="w-[30px] flex justify-center">
                      <svg viewBox="0 0 40 21" fill="none" className="h-5 text-black dark:text-white">
                        <path
                          className="fill-sky-400"
                          d="M17.183 0C12.6 0 9.737 2.291 8.59 6.873c1.719-2.29 3.723-3.15 6.014-2.577 1.307.326 2.242 1.274 3.275 2.324 1.685 1.71 3.635 3.689 7.894 3.689 4.582 0 7.445-2.291 8.591-6.872-1.718 2.29-3.723 3.15-6.013 2.576-1.308-.326-2.243-1.274-3.276-2.324C23.39 1.98 21.44 0 17.183 0ZM8.59 10.309C4.01 10.309 1.145 12.6 0 17.182c1.718-2.291 3.723-3.15 6.013-2.577 1.308.326 2.243 1.274 3.276 2.324 1.685 1.71 3.635 3.689 7.894 3.689 4.582 0 7.445-2.29 8.59-6.872-1.718 2.29-3.722 3.15-6.013 2.577-1.307-.327-2.242-1.276-3.276-2.325-1.684-1.71-3.634-3.689-7.893-3.689Z"
                        ></path>
                      </svg>
                    </div>

                    <div>Tailwindcss</div>
                  </div>
                  <div className="flex w-[150px] items-center gap-2">
                    <div className="w-[30px] flex justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          fill="#0073E6"
                          d="M24 5.601V1.592a.344.344 0 0 0-.514-.298l-2.64 1.508a.688.688 0 0 0-.346.597v4.009c0 .264.285.43.514.298l2.64-1.508A.688.688 0 0 0 24 5.6ZM.515 1.295l7.643 4.383a.688.688 0 0 0 .684 0l7.643-4.383a.344.344 0 0 1 .515.298v12.03c0 .235-.12.453-.319.58l-4.65 2.953 3.11 1.832c.22.13.495.127.713-.009l4.61-2.878a.344.344 0 0 0 .161-.292v-4.085c0-.254.14-.486.362-.606l2.507-1.346a.344.344 0 0 1 .506.303v7.531c0 .244-.13.47-.34.593l-7.834 4.592a.688.688 0 0 1-.71-.009l-5.953-3.681A.344.344 0 0 1 9 18.808v-3.624c0-.115.057-.222.153-.286l4.04-2.694a.688.688 0 0 0 .307-.572v-4.39a.137.137 0 0 0-.208-.117l-4.44 2.664a.688.688 0 0 1-.705.002L3.645 7.123a.138.138 0 0 0-.208.118v7.933a.344.344 0 0 1-.52.295L.5 14.019C.19 13.833 0 13.497 0 13.135V1.593c0-.264.286-.43.515-.298Z"
                        ></path>
                      </svg>
                    </div>

                    <div>Material UI</div>
                  </div>
                  <div className="flex w-[150px] items-center gap-2">
                    <div className="w-[30px] flex justify-center items-center">
                      {" "}
                      <Image alt="Icon" src="/docker.png" width={28} height={28} />
                    </div>

                    <div>Docker</div>
                  </div>
                  <div className="flex w-[150px] items-center gap-2">
                    <div className="w-[30px] flex justify-center items-center">
                      {" "}
                      <Image alt="Icon" src="/node.png" width={22} height={22} />
                    </div>

                    <div>Node.JS</div>
                  </div>
                  <div className="flex w-[150px] items-center gap-2">
                    <div className="w-[30px] flex justify-center">
                      <Image alt="Icon" src="/php.png" width={30} height={30} />
                    </div>

                    <div>PHP</div>
                  </div>
                  <div className="flex w-[150px] items-center gap-2">
                    <Image alt="Icon" src="/wordpress.png" width={30} height={30} />
                    <div>Wordpress</div>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card radius="sm" className="flex-1 bg-[linear-gradient(-225deg,_#022F63,_#006FEE)]">
              <CardBody className="flex flex-col gap-6 lg:p-6 lg:pb-0 pb-0 overflow-hidden">
                <div className="flex gap-4 items-center">
                  <MdContactMail className="opacity-60 text-white" size={24} />
                  <h3 className={title2()}>
                    <span className="text-white">Contact me</span>
                  </h3>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-[#ecedeece]">
                    Let’s work together! Whether you have a project in mind or just want to connect
                  </p>
                  <p className="text-[#ecedeece]">- feel free to reach out.</p>
                </div>
                <div className="flex flex-col gap-3 flex-1 items-center sm:items-start">
                  <Link
                    isExternal
                    target="_blanc"
                    className="w-[180px] flex justify-center items-center h-[40px] rounded-full bg-[#ffffff3c] text-white gap-2 text-sm shadow-[0_4px_6px_-4px_rgba(0,111,238,0.4),_0_10px_15px_-3px_rgba(0,111,238,0.4)]"
                    href={siteConfig.links.telegram}
                  >
                    <FaTelegramPlane size={22} />
                    Telegram
                  </Link>
                  <Link
                    isExternal
                    target="_blanc"
                    className="w-[180px] flex justify-center items-center h-[40px] rounded-full bg-[#ffffff3c] text-white gap-2 text-sm shadow-[0_4px_6px_-4px_rgba(0,111,238,0.4),_0_10px_15px_-3px_rgba(0,111,238,0.4)]"
                    href={siteConfig.links.mail}
                  >
                    <IoMdMail size={22} />
                    Email
                  </Link>
                </div>
                <Image
                  src={"/me.svg"}
                  alt="Image"
                  width={360}
                  height={360}
                  className="relative z-10 mb-[-2px] mx-auto"
                />
                <Image
                  src={"/mebg.svg"}
                  alt="Image"
                  width={400}
                  height={400}
                  className="absolute bottom-[-1px] left-0 w-full"
                />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
