import Project from "./Project";

export default function Modal() {
  return (
    <div className="modal">
      <img
        className="arrow arrow--left"
        src="left-arrow.png"
        alt="left-arrow"
      />
      <img
        className="arrow arrow--right"
        src="right-arrow.png"
        alt="right-arrow"
      />
      <Project
        title="Abyssal Mayhem"
        description="An online multiplayer 3D FPS game created in Unity"
        imagePath={"abyssalMayhem.png"}
      />
    </div>
  );
}
