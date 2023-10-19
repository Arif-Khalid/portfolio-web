import { useState } from "react";

export default function Project({ title, description, imagePath }) {
  const [isOverlayShown, setIsOverlayShown] = useState(false);

  return (
    <div className="project">
      <img
        onMouseEnter={() => setIsOverlayShown(true)}
        onMouseLeave={() => setIsOverlayShown(false)}
        src={imagePath}
        alt="project"
      />
      <div className={isOverlayShown ? "overlay" : "overlay show"}>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
}
