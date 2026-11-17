import Image from "next/image";
import "@/app/illustrations.css";

const scenes = {
  table: [1, 0],
  budget: [2, 0],
  weekly: [0, 1],
  groceries: [1, 1],
  inventory: [2, 1],
  favorites: [0, 2],
  custom: [1, 2],
};

export default function EditorialIllustration({
  scene = "studio",
  className = "",
  label,
  priority = false,
}) {
  const isHero = scene === "studio";
  const isSharing = scene === "sharing";
  const [column, row] = isHero ? [0, 0] : isSharing ? [1, 0] : scenes[scene] || scenes.table;
  const src = isHero
    ? "/images/unmake-studio-planner.png"
    : isSharing
      ? "/images/unmake-worktable-sharing.png"
      : "/images/studio-editorial-atlas.png";
  return (
    <span
      className={`editorial-illustration ${className}`}
      style={{ "--art-column": column, "--art-row": row }}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <Image
        src={src}
        style={isHero ? { width: "100%", height: "100%", objectFit: "contain" } : isSharing ? { width: "200%", height: "100%" } : undefined}
        alt=""
        width={isHero ? 1254 : isSharing ? 1774 : 1254}
        height={isHero ? 1254 : isSharing ? 887 : 1254}
        sizes={isHero ? "(max-width: 860px) 260px, 420px" : "1254px"}
        quality={85}
        priority={priority}
      />
    </span>
  );
}
