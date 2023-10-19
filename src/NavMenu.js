export default function NavMenu({ isOpen, onButtonPress }) {
  return (
    <div className={isOpen ? "nav--menu open" : "nav--menu"}>
      <button className="btn" onClick={onButtonPress}>
        Home
      </button>
      <button className="btn" onClick={onButtonPress}>
        Projects
      </button>
      <button className="btn" onClick={onButtonPress}>
        Skills
      </button>
      <button className="btn" onClick={onButtonPress}>
        Secret Resume
      </button>
      <button className="btn" onClick={onButtonPress}>
        Contact
      </button>
    </div>
  );
}
