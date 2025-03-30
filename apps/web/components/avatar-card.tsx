import { IconsMarquee } from "@/components/icons-marquee";

interface AvatarCardProps {
  icons: ((props: React.HTMLAttributes<SVGElement>) => React.JSX.Element)[];
}

export const AvatarCard = (props: AvatarCardProps) => {
  const { icons } = props;
  const m = 5;
  const r = icons.length % m;
  const n = (icons.length - r) / m;

  const directions = ["left", "right"] as const;
  const iconsGrid = Array.from({ length: m }, (_, i) => {
    const left = i * n + Math.min(r, i);
    const right = (i + 1) * n + Math.min(r, i) + Number(i < r);
    return icons.slice(left, right);
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={
          "border-primary flex aspect-square flex-col items-center justify-center overflow-hidden rounded-full border-2 transition-shadow duration-200 hover:shadow-md"
        }
        style={{ maxHeight: 64 * m }}
      >
        {iconsGrid.map((iconsRow, i) => {
          const speed = Math.floor(Math.random() * (50 - 30)) + 30;
          return (
            <IconsMarquee
              key={i}
              icons={iconsRow}
              speed={speed}
              direction={directions[i & 1]}
            />
          );
        })}
      </div>
    </div>
  );
};
