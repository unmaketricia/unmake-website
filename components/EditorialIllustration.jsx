import Image from "next/image";
import "@/app/illustrations.css";

const scenes = {
  studio: [0, 0],
  table: [1, 0],
  budget: [2, 0],
  weekly: [0, 1],
  groceries: [1, 1],
  inventory: [2, 1],
  favorites: [0, 2],
  custom: [1, 2],
  sharing: [2, 2],
};

export default function EditorialIllustration({
  scene = "studio",
  className = "",
  label,
  priority = false,
}) {
  const [column, row] = scenes[scene] || scenes.studio;
  return (
    <span
      className={`editorial-illustration ${className}`}
      style={{ "--art-column": column, "--art-row": row }}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <Image
        src="/images/studio-editorial-atlas.png"
        alt=""
        width={1254}
        height={1254}
        sizes="1254px"
        quality={85}
        priority={priority}
      />
    </span>
  );
}
