import Marquee from "react-fast-marquee";

interface IconsMarqueeProps {
  icons: ((props: React.HTMLAttributes<SVGElement>) => React.JSX.Element)[];
  direction?: "left" | "right";
  speed?: number;
}

export const IconsMarquee = (props: IconsMarqueeProps) => {
  const { icons, direction = "left", speed = 50 } = props;

  return (
    <Marquee autoFill speed={speed} direction={direction}>
      {icons.map((Icon, index) => (
        <Icon key={index} className="mx-2 size-12" />
      ))}
    </Marquee>
  );
};
