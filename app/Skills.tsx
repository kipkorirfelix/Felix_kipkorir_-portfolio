import { ParallaxLayer } from "@react-spring/parallax";
import Skill from "./components/Skill";
import CrossSkills from "./components/CrossSkills";
import { useOnScreen } from "./hooks/useOnScreen";
import { cn } from "@/lib/utils";

const SKILL_CARD_CLASSES = [
  "transition-all duration-1000 ease-in-out",
  "transition-all delay-100 duration-1000 ease-in-out",
  "transition-all delay-200 duration-1000 ease-in-out",
  "transition-all delay-300 duration-1000 ease-in-out",
  "transition-all delay-[400ms] duration-1000 ease-in-out",
  "transition-all delay-500 duration-1000 ease-in-out",
] as const;

/** Skills grid section with animated reveal. */
function Skills() {
  const [skillsRef, skillsVisible] = useOnScreen<HTMLDivElement>();

  return (
    <ParallaxLayer
      offset={3}
      speed={0}
      className="min-[600px] flex flex-col items-center bg-blue-9 dark:bg-blue-4"
    >
      <div
        ref={skillsRef}
        className="p-fluide-anim relative m-auto flex aspect-[2/3] w-5/6 max-w-96 flex-col lg:scale-110"
      >
        <CrossSkills />
        <div className="grid h-full w-full grid-cols-2 grid-rows-3 gap-4">
          {SKILL_CARD_CLASSES.map((skillClassName, index) => (
            <Skill
              key={index}
              id={index + 1}
              className={cn(skillClassName, skillsVisible ? "" : "scale-0 opacity-0")}
            />
          ))}
        </div>
      </div>
    </ParallaxLayer>
  );
}

export default Skills;
