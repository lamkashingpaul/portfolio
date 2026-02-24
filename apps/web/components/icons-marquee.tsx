import { cn } from "@workspace/ui/lib/utils";
import Marquee from "react-fast-marquee";

interface IconsMarqueeProps {
  className?: string;
  icons: ((props: React.HTMLAttributes<SVGElement>) => React.JSX.Element)[];
  direction?: "left" | "right";
  speed?: number;
}

export const IconsMarquee = (props: IconsMarqueeProps) => {
  const { className, icons, direction = "left", speed = 50 } = props;

  return (
    <Marquee
      autoFill
      speed={speed}
      direction={direction}
      pauseOnHover
      className={cn("p-4", className)}
    >
      {icons.map((Icon) => (
        <div
          key={Icon.name}
          className="mx-2 rounded-full bg-white p-2 shadow-md transition-transform duration-200 ease-in-out hover:scale-120"
        >
          <Icon className="size-8" />
        </div>
      ))}
    </Marquee>
  );
};
