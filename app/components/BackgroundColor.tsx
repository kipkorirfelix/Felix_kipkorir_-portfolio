import { ParallaxLayer } from "@react-spring/parallax";

type Props = {
  color: string;
  offset: number;
};

/** Solid color fill for a full parallax page. */
function BackgroundColor({ color, offset }: Props) {
  return (
    <ParallaxLayer
      offset={offset}
      className="min-h-[600px] w-full"
      style={{ backgroundColor: color }}
    />
  );
}

export default BackgroundColor;
