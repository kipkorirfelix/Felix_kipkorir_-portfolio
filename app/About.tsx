import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import Timeline from "./components/Timeline";
import "./style/about.css";
import Button from "./components/Button";
import Link from "next/link";
import { useOnScreen } from "./hooks/useOnScreen";
import { cn } from "@/lib/utils";
import SocialMedia from "./components/SocialMedia";

import selfieImg from "../public/img/selfie_v1.jpg";
import { useLanguage } from "./contexts/language-context";
import { SOCIAL_MEDIA_ITEMS } from "./constants/social-media";

const ARC_COLORS = ["bg-blue-8", "bg-blue-7", "bg-blue-5", "bg-blue-6", "bg-blue-4"];

/** About section with profile card, CV link, and timeline. */
function About() {
  const [aboutRef, aboutVisible] = useOnScreen<HTMLDivElement>();
  const [imgRef, imgVisible] = useOnScreen<HTMLImageElement>();
  const [descRef, descVisible] = useOnScreen<HTMLDivElement>();
  const [cvRef, cvVisible] = useOnScreen<HTMLButtonElement>();
  const [contactRef, contactVisible] = useOnScreen<HTMLDivElement>();

  const { texts } = useLanguage();
  const socialAltByKind = {
    git: texts.hero.social.altGit,
    linkedin: texts.hero.social.altLinkedin,
    mail: texts.hero.social.altMail,
  } as const;

  return (
    <ParallaxLayer
      offset={1}
      speed={0}
      className="relative flex min-h-[600px] flex-col items-center justify-evenly bg-blue-9 dark:bg-blue-4 lg:flex-row"
    >
      <div className="absolute top-0 -z-10 hidden h-32 w-full flex-col items-center bg-blue-9 dark:flex">
        {ARC_COLORS.map((colorClass, index) => (
          <div
            key={colorClass}
            className={cn("half-ellipse absolute", colorClass)}
            style={{ top: `${index * 0.5}rem` }}
          />
        ))}
      </div>

      <div
        ref={aboutRef}
        className={cn(
          "mx-4 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-white-1/65 to-blue-5/45 transition-all duration-500 ease-in-out lg:mx-0 dark:from-blue-9 lg:h-[642px] dark:to-blue-5",
          aboutVisible ? "" : "opacity-0"
        )}
      >
        <div className="m-px flex flex-col items-center justify-evenly gap-8 rounded-2xl bg-blue-9/95 py-8 lg:h-full lg:py-0 dark:bg-blue-1/85">
          <Image
            ref={imgRef}
            id="img-selfie"
            src={selfieImg}
            alt={texts.about.altPicture}
            placeholder="blur"
            className={cn(
              "w-40 rounded-full transition-all duration-500 ease-in-out lg:w-64",
              imgVisible ? "" : "translate-x-40 opacity-0"
            )}
          />

          <div
            ref={descRef}
            className={cn(
              "mx-12 max-w-[400px] text-sm transition-all duration-500 ease-in-out lg:text-base",
              descVisible ? "" : "-translate-x-40 opacity-0"
            )}
          >
            {texts.about.desc}
          </div>

          <Link href="/FELIX_KIPKORIR_CV.pdf" target="_blank">
            <Button
              ref={cvRef}
              text={texts.about.seeCV}
              className={cn(
                "transition-all duration-500 ease-in-out",
                cvVisible ? "" : "translate-x-40 opacity-0"
              )}
            />
          </Link>

          <div
            ref={contactRef}
            className={cn(
              "flex flex-row gap-5 transition-all duration-500 ease-in-out md:scale-125",
              contactVisible ? "" : "-translate-x-40 opacity-0"
            )}
          >
            {SOCIAL_MEDIA_ITEMS.map((socialItem) => (
              <div
                key={socialItem.num}
                className="rounded-full bg-gradient-to-tr from-blue-1 to-blue-6 p-px duration-150 hover:scale-125"
              >
                <SocialMedia
                  svgSrc={socialItem.svgSrc}
                  num={socialItem.num}
                  href={socialItem.href}
                  alt={socialAltByKind[socialItem.kind]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Timeline className="scale-90 lg:scale-110" />
    </ParallaxLayer>
  );
}

export default About;
