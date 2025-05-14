"use client";
import { cardTitle } from "@/components/primitives";
import { SectionTitle } from "./SectionTitle";
import { Card, CardBody } from "@heroui/card";
import { MdDashboardCustomize, MdOutlineWorkHistory } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { FiTool } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi";
import { RiLineChartLine } from "react-icons/ri";

const cards = [
  {
    icon: <MdOutlineWorkHistory size={20} />,
    title: "3+ Years",
    text: "Commercial web development experience",
  },
  {
    icon: <FaLaptopCode size={20} />,
    title: "50+ Websites",
    text: "Built and launched across multiple domains",
  },
  {
    icon: <MdDashboardCustomize size={20} />,
    title: "2 CRM Systems",
    text: "Developed from architecture to deployment",
  },
  {
    icon: <FiTool size={20} />,
    title: "20+ Tools",
    text: "Mastery of modern frontend technologies",
  },
  {
    icon: <HiOutlineUsers size={20} />,
    title: "Team & Solo Projects",
    text: "Experience contributing to team-based projects and owning features from scratch.",
  },
  {
    icon: <RiLineChartLine size={20} />,
    title: "Business-Oriented Thinking",
    text: "Deep understanding of how UI decisions impact conversion, retention, and growth.",
  },
];
export const ExperienceSection = () => {
  const mouseMove = (e: any) => {
    if (window.innerWidth > 1000) {
      for (const card of document.getElementsByClassName("card") as any) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    }
  };
  return (
    <section className="flex flex-col  justify-center gap-4 py-10 md:py-16">
      <SectionTitle
        subtitle="Career Highlights"
        title={
          <>
            <span>Metrics</span> that reflect the scale and impact of my work.
          </>
        }
      />
      <div className="flex gap-3  flex-wrap cards" onMouseMove={(e) => mouseMove(e)}>
        {cards.map((card) => (
          <Card key={card.title} radius="sm" className="card min-w-[250px] flex-1">
            <CardBody className="card__wrapper p-0">
              <div className="card__hover bg-black dark:bg-white"></div>
              <div className="card__bg text-white dark:text-[#18181b]">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="customPattern" width="8" height="8" patternUnits="userSpaceOnUse">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 0H0v12h12V0zM6 4.5A1.5 1.5 0 114.5 6 1.5 1.5 0 016 4.5z"
                        fill="currentColor"
                      />
                      <path fill="currentColor" fillOpacity=".25" d="M3 3h2v2H3z" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#customPattern)" />
                </svg>
              </div>
              <div className="card__content p-4 lg:p-6 gap-2">
                <div className="w-8 h-8 border-1 rounded-md border-default-400 bg-default-200 flex justify-center items-center">
                  {card.icon}
                </div>

                <h3 className={cardTitle()}>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};
