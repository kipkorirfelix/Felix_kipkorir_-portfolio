import { ParallaxLayer } from "@react-spring/parallax";
import { fontJersey15, fontInter } from "@/lib/font";
import { cn } from "@/lib/utils";
import Link from "next/link";

import "./style/footer.css";
import { useLanguage } from "./contexts/language-context";

type FooterMediaProps = {
  name: string;
  href: string;
};

/** Single footer link item. */
const FooterMedia = ({ name, href }: FooterMediaProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="p-fluide-anim p-footer-text transform hover:scale-105 hover:text-blue-1"
    >
      {name}
    </Link>
  );
};

/** Bottom section with name and social links. */
function Footer() {
  const { texts } = useLanguage();

  return (
    <ParallaxLayer
      offset={3}
      speed={0}
      className="min-[600px] pointer-events-none relative"
    >
      <div className="pointer-events-auto absolute bottom-0 flex h-9 w-full flex-row items-center justify-evenly">
        <span className={cn(fontJersey15.className, "text-xl lg:text-3xl")}>
          {texts.hero.arthur}
        </span>
        <div className="h-1/2 w-px bg-white-1 md:opacity-0" />
        <div
          className={cn(
            fontInter.className,
            "lg:text:md flex flex-row gap-3 text-sm lg:gap-16"
          )}
        >
          <FooterMedia name={texts.footer.git} href="https://github.com/kipkorirfelix" />
          <FooterMedia name={texts.footer.linkedin} href="tel:+254797751084" />
          <FooterMedia name={texts.footer.mail} href="mailto:felixtyler530@gmail.com" />
        </div>
      </div>
    </ParallaxLayer>
  );
}

export default Footer;
