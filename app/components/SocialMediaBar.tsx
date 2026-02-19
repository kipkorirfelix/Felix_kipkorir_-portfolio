import { ParallaxLayer } from "@react-spring/parallax";
import { useRef, useState } from "react";
import SocialMedia from "./SocialMedia";

import { useLanguage } from "../contexts/language-context";
import { SOCIAL_MEDIA_ITEMS } from "../constants/social-media";

type Props = {
  speed: number;
};

/** Left-side social bar with hover indicator and label. */
export default function SocialMediaBar({ speed }: Props) {
  const { texts } = useLanguage();
  const firstBadgeRef = useRef<HTMLButtonElement | null>(null);
  const [indicatorWidth, setIndicatorWidth] = useState("100%");
  const [indicatorLeft, setIndicatorLeft] = useState(0);
  const [indicatorText, setIndicatorText] = useState(" ");
  const socialLabelByKind = {
    git: texts.footer.git,
    linkedin: texts.footer.linkedin,
    mail: texts.footer.mail,
  } as const;
  const socialAltByKind = {
    git: texts.hero.social.altGit,
    linkedin: texts.hero.social.altLinkedin,
    mail: texts.hero.social.altMail,
  } as const;

  const resetIndicator = () => {
    setIndicatorWidth("100%");
    setIndicatorLeft(0);
    setIndicatorText(" ");
  };

  const updateIndicator = (badge: HTMLButtonElement, text: string) => {
    const firstBadgeOffset = firstBadgeRef.current?.offsetLeft ?? 0;
    setIndicatorWidth(`${badge.clientWidth}px`);
    setIndicatorLeft(badge.offsetLeft - firstBadgeOffset);
    setIndicatorText(text);
  };

  return (
    <ParallaxLayer
      id="social-media-layer"
      offset={0}
      speed={speed}
      className="flex justify-start sm:ml-0 sm:justify-center"
    >
      <div id="social-media-outer" className="flex flex-col gap-2 p-3">
        <div className="flex flex-row gap-7 sm:gap-10">
          {SOCIAL_MEDIA_ITEMS.map((socialItem) => (
            <SocialMedia
              key={socialItem.num}
              ref={socialItem.num === "1" ? firstBadgeRef : undefined}
              svgSrc={socialItem.svgSrc}
              num={socialItem.num}
              href={socialItem.href}
              alt={socialAltByKind[socialItem.kind]}
              onMouseEnter={(event) =>
                updateIndicator(
                  event.currentTarget,
                  socialLabelByKind[socialItem.kind]
                )
              }
              onMouseLeave={resetIndicator}
            />
          ))}
        </div>

        <div
          id="social-media-selecteur"
          className="flex flex-col items-center rounded-full"
          style={{ left: indicatorLeft, width: indicatorWidth }}
        >
          <div
            id="social-media-selecteur-text"
            className="mt-2 text-nowrap text-center text-sm text-blue-8"
          >
            {indicatorText}
          </div>
        </div>
      </div>
    </ParallaxLayer>
  );
}
