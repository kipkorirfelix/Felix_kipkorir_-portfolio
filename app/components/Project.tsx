"use client";

import { cn } from "@/lib/utils";
import Button from "./Button";
import { fontJersey15 } from "@/lib/font";
import "../style/project.css";
import SocialMedia from "./SocialMedia";

import Image from "next/image";
import { forwardRef } from "react";

import projectsEn from "../../lang/data-projects-en";

import githubBadge from "../../public/img/social_media/github-badge.svg";
import { useLanguage } from "../contexts/language-context";

type Props = {
  id: number;
  isExpanded: boolean;
  onExpand: (id: number) => void;
  className?: string;
};

const darkenColor = (color: string, percent: number) => {
  const hex = color.replace("#", "");
  const red = parseInt(hex.substring(0, 2), 16);
  const green = parseInt(hex.substring(2, 4), 16);
  const blue = parseInt(hex.substring(4, 6), 16);

  const newRed = Math.floor(red * (1 - percent));
  const newGreen = Math.floor(green * (1 - percent));
  const newBlue = Math.floor(blue * (1 - percent));

  return `#${((1 << 24) | (newRed << 16) | (newGreen << 8) | newBlue)
    .toString(16)
    .slice(1)}`;
};

/** Single expandable project card. */
const Project = forwardRef<HTMLDivElement, Props>(function Project(
  { id, isExpanded, onExpand, className },
  ref
) {
  const { texts } = useLanguage();
  const selectedProject = projectsEn.find((project) => project.id === id);

  const baseColor = selectedProject?.color ?? "#000000";
  const darkenedColor = darkenColor(baseColor, 0.2);

  return (
    <div
      ref={ref}
      className={cn(
        "group relative mx-4 my-2 flex-grow overflow-hidden rounded-md border-2 border-blue-7/50 transition-all duration-500 hover:border-blue-6/80 lg:w-96 lg:flex-grow-0 lg:hover:-translate-y-7 lg:hover:scale-105",
        className
      )}
      style={{
        background: `linear-gradient(45deg, ${darkenedColor}, ${baseColor} 20%, ${darkenedColor} 45%,${baseColor} 70%, ${darkenedColor})`
      }}
    >
      <SocialMedia
        svgSrc={githubBadge}
        className="p-fluide-anim absolute bottom-1 right-1 z-50 scale-90 shadow-[0_0_5px] shadow-blue-1 lg:bottom-4 lg:right-4 lg:scale-125"
        href={selectedProject?.link}
        alt={`${texts.projects.altProjects} ${selectedProject?.title}`}
      />

      <div className="p-bg-lines h-full w-full">
        <div className="p-bg-lines relative flex h-full w-full flex-col items-center justify-around">
          {!isExpanded && (
            <span
              className={cn(
                "z-10 text-center text-2xl text-white-1 lg:text-4xl",
                fontJersey15.className
              )}
            >
              {selectedProject?.title}
            </span>
          )}

          <div className="flex h-full flex-col items-center justify-evenly gap-12 md:h-auto md:flex-row lg:flex-col">
            <div
              className={cn(
                "relative flex aspect-[1920/1080] w-64 items-center justify-center overflow-hidden rounded-lg border border-blue-9 transition-all duration-0 lg:w-80 lg:duration-300 lg:group-hover:scale-110",
                isExpanded ? "aspect-auto h-full w-full" : ""
              )}
            >
              <Image
                src={selectedProject?.image_path ?? ""}
                placeholder="blur"
                alt=""
                className={cn(
                  "absolute inset-0 duration-700",
                  isExpanded ? "h-full w-full object-cover brightness-[0.4]" : ""
                )}
                onClick={() => onExpand(id)}
              />

              {!isExpanded && (
                <Button
                  text={texts.projects.seeMore}
                  className="absolute z-20 mb-3 scale-90 self-end md:hidden"
                  onClick={() => onExpand(id)}
                />
              )}

              {isExpanded && (
                <div className="relative z-30 p-4 text-center text-white-1">
                  <h2 className={cn("mb-2 text-2xl font-bold", fontJersey15.className)}>
                    {selectedProject?.title}
                  </h2>
                  <p className="text-sm">
                    {selectedProject?.description ?? texts.projects.noDescription}
                  </p>
                </div>
              )}
            </div>

            <p className="mx-4 hidden w-1/3 rounded-md bg-[#00000033] p-2 text-center text-sm md:inline-block lg:w-auto lg:text-base">
              {selectedProject?.description ?? texts.projects.noDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Project;
