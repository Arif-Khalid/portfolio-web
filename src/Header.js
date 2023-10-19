import { useState } from "react";
import NavMenu from "./NavMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function onButtonPress() {
    setIsOpen(false);
  }
  return (
    <nav>
      <div
        className={
          isOpen
            ? "nav--hamburger mobile-only open"
            : "nav--hamburger mobile-only"
        }
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span className="line line-1"></span>
        <span className="line line-2"></span>
        <span className="line line-3"></span>
      </div>
      <div className="nav--name">Arif K.</div>
      <div className="nav--links hide-on-mobile">
        <button className="btn">Projects</button>
        <button className="btn">Skills</button>
      </div>
      <div className="nav--availability">
        <div>Available</div>
        <div>May-Aug 2024</div>
      </div>
      <NavMenu isOpen={isOpen} onButtonPress={onButtonPress} />
    </nav>
  );
}
