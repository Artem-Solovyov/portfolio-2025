import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { FaGithub } from "react-icons/fa6";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { FaTelegramPlane } from "react-icons/fa";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";

export const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-2xl text-center justify-center">
        <span className={title()}>Experienced&nbsp;</span>
        <span className={title({ color: "violet" })}>Web Developer&nbsp;</span>
        <br />
        <span className={title()}>Crafting Scalable and Engaging Frontend Solutions</span>
        <div className={subtitle({ class: "mt-4" })}>
          Currently looking for full-time opportunities to build high-quality, user-focused web applications.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          target="_blanc"
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.telegram}
        >
          <FaTelegramPlane />
          Telegram
        </Link>
        <Link
          isExternal
          target="_blanc"
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <FaGithub size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        {/* <Button variant="flat" size="lg" color="primary">
          Resume Preview (PDF)
        </Button> */}
        <Card radius="md">
          <CardBody className="py-2 px-4 pr-2">
            <span>
              Resume Preview (PDF){" "}
              <Button variant="flat" color="primary">
                View
              </Button>
            </span>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};
