import Image, { StaticImageData } from "next/image";
import "../style/socialMedia.css";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MouseEventHandler, forwardRef } from "react";

type Props = {
  svgSrc: StaticImageData;
  className?: string;
  num?: string;
  href?: string;
  alt?: string;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
};

/** Social icon button used in hero and about sections. */
const SocialMedia = forwardRef<HTMLButtonElement, Props>(function SocialMedia(
  {
    svgSrc,
    className = "",
    num = "0",
    href = "#",
    alt = "Social media icon",
    onMouseEnter,
    onMouseLeave,
  },
  ref
) {
  return (
    <Link href={href} target={href === "#" ? "" : "_blank"} passHref>
      <button
        ref={ref}
        className={cn(
          "p-social-media-badge animate-shimmer bg-[linear-gradient(110deg,#002545,45%,#003b64,55%,#002545)] bg-[length:200%_100%] transition-colors",
          className
        )}
        data-num={parseInt(num, 10)}
        id={`social-media-badge-${num}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Image src={svgSrc} alt={alt} priority />
      </button>
    </Link>
  );
});

export default SocialMedia;
