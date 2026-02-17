import { fontJersey15 } from "@/lib/font";
import { cn } from "@/lib/utils";
import { ParallaxLayer } from "@react-spring/parallax";

type Props = {
  speed: number;
  text: string;
  className?: string;
};

/** Centered parallax text layer for the hero greeting and name. */
function Name({ speed, text, className = "" }: Props) {
  return (
    <ParallaxLayer
      offset={0}
      speed={speed}
      className="pointer-events-none flex justify-center"
    >
      <p
        className={cn(
          "flex items-center transition-all duration-200 ease-in-out",
          fontJersey15.className,
          className
        )}
      >
        <span className="pointer-events-auto">{text}</span>
      </p>
    </ParallaxLayer>
  );
}

export default Name;
