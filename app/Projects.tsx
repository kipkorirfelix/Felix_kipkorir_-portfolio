import { useEffect, useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import Project from "./components/Project";
import { useOnScreen } from "./hooks/useOnScreen";
import { cn } from "@/lib/utils";

const PROJECT_CARDS = [
  {
    id: 1,
    transitionClass: "transition-all duration-1000 ease-in-out hover:duration-300",
    hiddenClass: "pointer-events-none opacity-0",
  },
  {
    id: 2,
    transitionClass:
      "transition-all delay-300 duration-1000 ease-in-out hover:delay-0 hover:duration-300",
    hiddenClass: "opacity-0",
  },
  {
    id: 3,
    transitionClass:
      "transition-all delay-[600ms] duration-1000 ease-in-out hover:delay-0 hover:duration-300",
    hiddenClass: "opacity-0",
  },
] as const;

type ProjectCardProps = {
  id: number;
  isExpanded: boolean;
  onExpand: (id: number) => void;
  transitionClass: string;
  hiddenClass: string;
};

function AnimatedProjectCard({
  id,
  isExpanded,
  onExpand,
  transitionClass,
  hiddenClass,
}: ProjectCardProps) {
  const [projectRef, projectVisible] = useOnScreen<HTMLDivElement>();

  return (
    <Project
      ref={projectRef}
      id={id}
      isExpanded={isExpanded}
      onExpand={onExpand}
      className={cn(transitionClass, projectVisible ? "" : hiddenClass)}
    />
  );
}

/** Projects section with expandable cards. */
function Projects() {
  const [expandedProjectId, setExpandedProjectId] = useState(-1);

  const handleExpandProject = (id: number) => {
    if (window.innerWidth > 768) {
      setExpandedProjectId(-1);
      return;
    }

    setExpandedProjectId((currentId) => (currentId === id ? -1 : id));
  };

  useEffect(() => {
    const onResize = () => setExpandedProjectId(-1);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <ParallaxLayer
      offset={2}
      speed={0}
      className="h-min-[600px] flex items-center justify-center bg-blue-9 dark:bg-blue-4"
    >
      <div className="flex h-full w-full flex-col justify-center lg:h-4/5 lg:min-h-[600px] lg:flex-row">
        {PROJECT_CARDS.map((projectCard) => (
          <AnimatedProjectCard
            key={projectCard.id}
            id={projectCard.id}
            isExpanded={expandedProjectId === projectCard.id}
            onExpand={handleExpandProject}
            transitionClass={projectCard.transitionClass}
            hiddenClass={projectCard.hiddenClass}
          />
        ))}
      </div>
    </ParallaxLayer>
  );
}

export default Projects;
