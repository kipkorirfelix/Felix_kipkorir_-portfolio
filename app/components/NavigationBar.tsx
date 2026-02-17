import { IParallax, ParallaxLayer } from "@react-spring/parallax";
import { fontJersey15 } from "@/lib/font";
import "../style/navigationBar.css";
import { RefObject } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "../contexts/language-context";

type Props = {
  speed: number;
  parallaxRef: RefObject<IParallax | null>;
};

type NavigationTextProps = {
  text: string;
  className?: string;
  onClick?: () => void;
};

/** Clickable item inside the hero side navigation. */
function NavigationBarText({
  text,
  className = "",
  onClick = () => {}
}: NavigationTextProps) {
  return (
    <span
      onClick={onClick}
      className={cn(
        "p-navigation-bar-text px-4 py-1 text-end text-3xl text-blue-9 lg:px-12 lg:text-4xl",
        fontJersey15.className,
        className
      )}
    >
      {text}
    </span>
  );
}

/** Right-side navigation that scrolls to each parallax section. */
function NavigationBar({ speed, parallaxRef }: Props) {
  const { texts } = useLanguage();

  const scrollToSection = (sectionOffset: number) => {
    parallaxRef.current?.scrollTo(sectionOffset);
  };

  return (
    <ParallaxLayer
      offset={0}
      speed={speed}
      className="pointer-events-none flex justify-end"
    >
      <div
        id="navigation-bar"
        className="pointer-events-auto flex flex-col pt-4 lg:pt-8"
      >
        <NavigationBarText
          text={texts.hero.nav.about}
          onClick={() => scrollToSection(1)}
        />
        <NavigationBarText
          text={texts.hero.nav.projects}
          onClick={() => scrollToSection(2)}
        />
        <NavigationBarText
          text={texts.hero.nav.skills}
          onClick={() => scrollToSection(3)}
        />
      </div>
    </ParallaxLayer>
  );
}

export default NavigationBar;
