import { Card, CardFooter } from "@heroui/card";
import { SectionTitle } from "./SectionTitle";
import Image from "next/image";
import { Link } from "@heroui/link";
import { GoArrowUpRight } from "react-icons/go";

const works = [
  {
    name: "Remote Helpers",
    desc: "E-commerce-style site for hiring pre-screened IT professionals.",
    image: "/rh.png",
    link: "https://rh-s.com/",
  },

  {
    name: "Aimagine",
    desc: "Data-Powered Web-3 AI Agents, Designed for Revenue",
    image: "/aimagin.png",
    link: "https://aimagine.wtf/",
  },
  {
    name: "Aveo Tech",
    desc: "AI services landing page designed to showcase value and convert leads",
    image: "/aveo.png",
    link: "https://aveotech.com/",
  },
  {
    name: "Relite",
    desc: "NFT Digital representation of real products",
    image: "/relite.png",
    link: "https://www.relite.finance/",
  },
  {
    name: "Future Voyagers",
    desc: "Limited NFT collection on arbitrum layer",
    image: "/future.png",
    link: "https://64c50f9cad7dc46d44fde4ba--fanciful-cranachan-a494df.netlify.app/",
  },
  {
    name: "Mint Wentures",
    desc: "Team that help founders turn ideas into impactful ventures",
    image: "/mv.png",
    link: "https://www.mintventures.xyz/",
  },
  {
    name: "Fana AI",
    desc: "Promo site for AI-powered Sales and Support assistants",
    image: "/fana.png",
    link: "https://fana-ai-landing.vercel.app/",
  },
  {
    name: "Psychology",
    desc: "Promo site for a psychologist focused on client acquisition",
    image: "/liza.png",
    link: "https://spectacular-mochi-c9ad72.netlify.app/",
  },
  {
    name: "Kallis",
    desc: "NFT Utility builder for fashion industry",
    image: "/kallis.png",
    link: "https://usekallis.com/",
  },
];
export const WorksSection = () => {
  return (
    <section id="portfolio" className="flex flex-col gap-4 py-10 md:py-16">
      <SectionTitle
        subtitle="Latest Work"
        title={
          <>
            A <span>Curated Selection</span> of recent projects — crafted with precision, purpose, and performance.
          </>
        }
      />
      <div className="flex gap-4 lg:gap-6 justify-evenly flex-wrap">
        {works.map((work) => (
          <Card
            key={work.name}
            isFooterBlurred
            className="border-white/10 border-1 lg:w-[31.6%] sm:w-[48%] max-w-[400px] aspect-[0.88]  min-w-[200px]"
            radius="lg"
          >
            <Image alt="Image" className="object-cover" height={512} src={work.image} width={640} />
            <CardFooter className="justify-between  bg-black/40 border-white/40 border-1 overflow-hidden py-3 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_16px)] shadow-small ml-2 z-10 mb-1 flex gap-2 ">
              <p className="text-sm text-white/80 ">{work.desc}</p>
              <Link
                isExternal
                target="_blanc"
                // className={buttonStyles({
                //   color: "secondary",
                //   radius: "full",
                //   variant: "shadow",
                // })}
                className="text-sm text-white bg-white/20 p-3 hover:rotate-45 transition-all rounded-full  hover:text-danger"
                href={work.link}
              >
                <GoArrowUpRight size={26} />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
