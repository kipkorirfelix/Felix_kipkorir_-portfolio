import { ParallaxLayer } from "@react-spring/parallax";
import { useEffect } from "react";
import SocialMedia from "./SocialMedia";

import githubBadge from "../../public/img/social_media/github-badge.svg";
import linkedinBadge from "../../public/img/social_media/linkedin-badge.svg";
import mailBadge from "../../public/img/social_media/mail-badge.svg";
import { useLanguage } from "../contexts/language-context";

type Props = {
  speed: number;
};

/** Left-side social bar with hover indicator and label. */
export default function SocialMediaBar({ speed }: Props) {
  const { texts } = useLanguage();

  useEffect(() => {
    const indicator = document.getElementById("social-media-selecteur");
    const indicatorText = document.getElementById("social-media-selecteur-text");
    const socialBadges = Array.from(
      document.getElementsByClassName("p-social-media-badge")
    ) as HTMLElement[];

    const updateIndicator = (badge: HTMLElement) => {
      const firstBadgeOffset =
        document.getElementById("social-media-badge-1")?.offsetLeft ?? 0;
      const badgeOffset = badge.offsetLeft ?? 0;

      if (indicator) {
        indicator.style.width = `${badge.clientWidth}px`;
        indicator.style.left = `${badgeOffset - firstBadgeOffset}px`;
      }
    };

    const resetIndicator = () => {
      if (indicator) {
        indicator.style.width = "100%";
        indicator.style.left = "0";
      }

      if (indicatorText) {
        indicatorText.textContent = " ";
      }
    };

    const listeners = socialBadges.map((badge) => {
      const onMouseEnter = () => {
        const badgeNumber = parseInt(badge.dataset.num ?? "0", 10);
        updateIndicator(badge);

        if (!indicatorText) {
          return;
        }

        switch (badgeNumber) {
          case 1:
            indicatorText.textContent = texts.footer.git;
            break;
          case 2:
            indicatorText.textContent = texts.footer.linkedin;
            break;
          case 3:
            indicatorText.textContent = texts.footer.mail;
            break;
          default:
            indicatorText.textContent = " ";
            break;
        }
      };

      badge.addEventListener("mouseenter", onMouseEnter);
      badge.addEventListener("mouseleave", resetIndicator);

      return { badge, onMouseEnter };
    });

    return () => {
      listeners.forEach(({ badge, onMouseEnter }) => {
        badge.removeEventListener("mouseenter", onMouseEnter);
        badge.removeEventListener("mouseleave", resetIndicator);
      });
    };
  }, [texts]);

  return (
    <ParallaxLayer
      id="social-media-layer"
      offset={0}
      speed={speed}
      className="flex justify-start sm:ml-0 sm:justify-center"
    >
      <div id="social-media-outer" className="flex flex-col gap-2 p-3">
        <div className="flex flex-row gap-7 sm:gap-10">
          <SocialMedia
            svgSrc={githubBadge}
            num="1"
            href="https://github.com/kipkorirfelix"
            alt={texts.hero.social.altGit}
          />

          <SocialMedia
            svgSrc={linkedinBadge}
            num="2"
            href="tel:+254797751084"
            alt={texts.hero.social.altLinkedin}
          />

          <SocialMedia
            svgSrc={mailBadge}
            num="3"
            href="mailto:felixtyler530@gmail.com"
            alt={texts.hero.social.altMail}
          />
        </div>

        <div
          id="social-media-selecteur"
          className="flex flex-col items-center rounded-full"
        >
          <div
            id="social-media-selecteur-text"
            className="mt-2 text-nowrap text-center text-sm text-blue-8"
          />
        </div>
      </div>
    </ParallaxLayer>
  );
}
