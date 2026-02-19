import { StaticImageData } from "next/image";

import githubBadge from "../../public/img/social_media/github-badge.svg";
import linkedinBadge from "../../public/img/social_media/linkedin-badge.svg";
import mailBadge from "../../public/img/social_media/mail-badge.svg";

export type SocialKind = "git" | "linkedin" | "mail";

export type SocialMediaItem = {
  num: "1" | "2" | "3";
  kind: SocialKind;
  href: string;
  svgSrc: StaticImageData;
};

export const SOCIAL_MEDIA_ITEMS: SocialMediaItem[] = [
  {
    num: "1",
    kind: "git",
    href: "https://github.com/kipkorirfelix",
    svgSrc: githubBadge,
  },
  {
    num: "2",
    kind: "linkedin",
    href: "tel:+254797751084",
    svgSrc: linkedinBadge,
  },
  {
    num: "3",
    kind: "mail",
    href: "mailto:felixtyler530@gmail.com",
    svgSrc: mailBadge,
  },
];
