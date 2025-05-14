import { Card, CardFooter } from "@heroui/card";
import { SectionTitle } from "./SectionTitle";
import Image from "next/image";
import { button as buttonStyles } from "@heroui/theme";
import { Link } from "@heroui/link";

const works = [
  {
    name: "Mint Wentures",
    desc: "Team that help founders turn ideas into impactful ventures",
    image: "/mv.png",
    link: "https://www.mintventures.xyz/",
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
    name: "Fana AI",
    desc: "Promo site for AI-powered Sales and Support assistants",
    image: "/fana.png",
    link: "https://fana-ai-landing.vercel.app/",
  },
];
export const WorksSection = () => {
  return (
    <section className="flex flex-col gap-4 py-10 md:py-16">
      <SectionTitle
        subtitle="Latest Work"
        title={
          <>
            A <span>Curated Selection</span> of recent projects — crafted with precision, purpose, and performance.
          </>
        }
      />
      <div className="flex gap-4 justify-between flex-wrap">
        {works.map((work) => (
          <Card key={work.name} isFooterBlurred className="border-none max-w-[400px] min-w-[300px]" radius="lg">
            <Image alt="Image" className="object-cover" height={512} src={work.image} width={640} />
            <CardFooter className="justify-between before:bg-white/10 bg-black/60 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 ">
              <p className="text-sm text-white/80 ">{work.desc}</p>
              <Link
                isExternal
                target="_blanc"
                // className={buttonStyles({
                //   color: "secondary",
                //   radius: "full",
                //   variant: "shadow",
                // })}
                className="text-sm text-white bg-white/20 p-3 px-5 rounded-3xl"
                href={work.link}
              >
                Review
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
